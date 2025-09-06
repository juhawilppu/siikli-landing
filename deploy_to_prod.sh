#!/bin/bash
set -e
start=$(date +%s)

command -v aws >/dev/null 2>&1 || { echo >&2 "❌ AWS CLI is not installed. Aborting."; exit 1; }

echo "🔍 Running linter..."
npm run lint

# Application version
version=$(date +%s)

echo "🏗️ Building frontend..."
npm run build

echo "🚀 Deploying frontend..."
aws s3 sync ./dist/ s3://siikli.fi --delete

end=$(date +%s)
echo "--------------------------------"
echo "🎉 Deployment complete!"
echo "🌐 Environment: https://siikli.fi"
echo "🕒 Total time: $((end - start))s"
