# MELDLOOM

Official brand website for **MELDLOOM** — *Where Ideas Take Shape.*

This is a premium React launch page. The full store can be added later without changing the brand identity.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static site is written to `dist/`. Upload that folder to S3 and serve it through CloudFront.

## CloudFront deploy

Requires the AWS CLI and credentials:

```bash
brew install awscli
aws configure
npm run deploy
```

Defaults:

- Bucket: `meldloom-brand-site`
- Region: `ap-south-1`

Override with `BUCKET`, `AWS_REGION`, or `CLOUDFRONT_DISTRIBUTION_ID` if you already have infrastructure.
