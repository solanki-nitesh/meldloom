#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

BUCKET="${BUCKET:-meldloom-brand-site}"
REGION="${AWS_REGION:-ap-south-1}"
STATE_FILE="$ROOT/.deploy-state"
AWS_BIN="${AWS_BIN:-aws}"

if ! command -v "$AWS_BIN" >/dev/null 2>&1; then
  echo "AWS CLI is not installed. Install it, then re-run:"
  echo "  brew install awscli && aws configure"
  echo "  npm run deploy"
  exit 1
fi

if ! "$AWS_BIN" sts get-caller-identity >/dev/null 2>&1; then
  echo "AWS credentials are missing. Run: aws configure"
  exit 1
fi

npm run build

if ! "$AWS_BIN" s3api head-bucket --bucket "$BUCKET" 2>/dev/null; then
  "$AWS_BIN" s3api create-bucket \
    --bucket "$BUCKET" \
    --region "$REGION" \
    --create-bucket-configuration LocationConstraint="$REGION"
fi

"$AWS_BIN" s3 sync dist/ "s3://$BUCKET" --delete --cache-control "public, max-age=31536000, immutable" --exclude "index.html"
"$AWS_BIN" s3 cp dist/index.html "s3://$BUCKET/index.html" --cache-control "public, max-age=60, must-revalidate" --content-type "text/html"

DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID:-}"
if [[ -z "$DISTRIBUTION_ID" && -f "$STATE_FILE" ]]; then
  DISTRIBUTION_ID="$(sed -n 's/^DISTRIBUTION_ID=//p' "$STATE_FILE")"
fi

if [[ -z "$DISTRIBUTION_ID" ]]; then
  OAI_ID="$("$AWS_BIN" cloudfront create-cloud-front-origin-access-identity \
    --cloud-front-origin-access-identity-config "CallerReference=meldloom-$(date +%s),Comment=MELDLOOM brand site" \
    --query 'CloudFrontOriginAccessIdentity.Id' --output text)"

  DIST_JSON="$("$AWS_BIN" cloudfront create-distribution --distribution-config "$(cat <<EOF
{
  "CallerReference": "meldloom-$(date +%s)",
  "Comment": "MELDLOOM brand site",
  "Enabled": true,
  "DefaultRootObject": "index.html",
  "Origins": {
    "Quantity": 1,
    "Items": [
      {
        "Id": "s3-meldloom",
        "DomainName": "${BUCKET}.s3.${REGION}.amazonaws.com",
        "S3OriginConfig": {
          "OriginAccessIdentity": "origin-access-identity/cloudfront/${OAI_ID}"
        }
      }
    ]
  },
  "DefaultCacheBehavior": {
    "TargetOriginId": "s3-meldloom",
    "ViewerProtocolPolicy": "redirect-to-https",
    "AllowedMethods": { "Quantity": 2, "Items": ["GET", "HEAD"] },
    "ForwardedValues": { "QueryString": false, "Cookies": { "Forward": "none" } },
    "MinTTL": 0,
    "Compress": true
  },
  "CustomErrorResponses": {
    "Quantity": 2,
    "Items": [
      { "ErrorCode": 403, "ResponsePagePath": "/index.html", "ResponseCode": "200", "ErrorCachingMinTTL": 60 },
      { "ErrorCode": 404, "ResponsePagePath": "/index.html", "ResponseCode": "200", "ErrorCachingMinTTL": 60 }
    ]
  }
}
EOF
)")"

  DISTRIBUTION_ID="$(python3 - <<'PY' <<<"$DIST_JSON"
import json,sys
print(json.load(sys.stdin)["Distribution"]["Id"])
PY
)"
  DOMAIN="$(python3 - <<'PY' <<<"$DIST_JSON"
import json,sys
print(json.load(sys.stdin)["Distribution"]["DomainName"])
PY
)"
  {
    echo "DISTRIBUTION_ID=$DISTRIBUTION_ID"
    echo "DOMAIN=$DOMAIN"
    echo "BUCKET=$BUCKET"
  } > "$STATE_FILE"
fi

"$AWS_BIN" cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths "/*" >/dev/null
echo "Deployed to CloudFront distribution $DISTRIBUTION_ID"
if [[ -f "$STATE_FILE" ]]; then
  sed -n 's/^DOMAIN=/Live URL: https:\/\//p' "$STATE_FILE"
fi
