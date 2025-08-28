#!/bin/bash
set -e
start=$(date +%s)

command -v docker >/dev/null 2>&1 || { echo >&2 "❌ Docker is not installed. Aborting."; exit 1; }
command -v aws >/dev/null 2>&1 || { echo >&2 "❌ AWS CLI is not installed. Aborting."; exit 1; }

echo "🔍 Running linter..."
npm run lint
npm run lint

echo "🔍 Formatting prisma schema..."
(
    cd backend
    npx prisma format
)

# Application version
version=$(date +%s)

echo "🏗️ Building frontend..."
(
    cd frontend
    npm run build
)

echo "🚀 Deploying frontend..."
(
    cd frontend
    aws s3 sync ./dist/ s3://siikli.fi --delete
)

end=$(date +%s)
echo "--------------------------------"
echo "🎉 Deployment complete!"
echo "🌐 Environment: https://siikli.fi"
echo "🕒 Total time: $((end - start))s"
