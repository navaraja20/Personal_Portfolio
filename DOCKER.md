# 🐳 Docker Setup Guide

## Prerequisites

1. Install Docker Desktop for Windows: https://www.docker.com/products/docker-desktop/

## Running with Docker

### Option 1: Docker Compose (Recommended)

```powershell
# Start the development server
docker-compose up

# Or run in detached mode
docker-compose up -d

# Stop the server
docker-compose down
```

Visit http://localhost:3000

### Option 2: Docker CLI

```powershell
# Build the image
docker build -t navaraja-portfolio .

# Run the container
docker run -p 3000:3000 -v ${PWD}:/app navaraja-portfolio

# Run with environment variables
docker run -p 3000:3000 `
  -e NEXT_PUBLIC_GITHUB_USERNAME=navaraja20 `
  -e NEXT_PUBLIC_GITHUB_TOKEN=your_token `
  navaraja-portfolio
```

### Option 3: Quick Start (Node.js Alpine)

```powershell
# Pull Node.js image
docker pull node:20-alpine

# Run container with your project
docker run -it --rm `
  -v ${PWD}:/app `
  -w /app `
  -p 3000:3000 `
  node:20-alpine sh

# Inside the container:
npm install
npm run dev
```

## Production Build

```powershell
# Build for production
docker build -t navaraja-portfolio:prod --target production .

# Run production server
docker run -p 3000:3000 navaraja-portfolio:prod
```

## Troubleshooting

### Port already in use
```powershell
# Use a different port
docker run -p 3001:3000 navaraja-portfolio
```

### Permission issues
```powershell
# Run as current user
docker run --user $(id -u):$(id -g) navaraja-portfolio
```

### Clear everything and restart
```powershell
docker-compose down -v
docker-compose up --build
```

## Notes

- Hot reload works with volume mounting
- node_modules is in a volume for better performance
- Environment variables are loaded from .env.local
- Use Node.js 20 LTS for stability (not v25 which is current/unstable)

---

**💡 Tip**: For local development without containers, direct Node.js installation is faster and simpler!
