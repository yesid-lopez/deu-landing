# Base image - use a specific version for better reproducibility
FROM node:20.11-alpine AS deps

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies for the final image
RUN npm ci --only=production
RUN cp -R node_modules /prod_node_modules
RUN npm ci

# Builder stage
FROM node:20.11-alpine AS builder

WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production image - use a smaller base image
FROM node:20.11-alpine AS runner

# Set working directory
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy only necessary files from builder
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=deps /prod_node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Set correct permissions
RUN chown -R nextjs:nodejs /app

# Use the non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"] 
