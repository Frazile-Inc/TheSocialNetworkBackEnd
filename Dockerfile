FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Install dependencies first (better caching)
COPY package*.json ./
COPY .env ./
RUN npm ci --only=production

# Copy application source
COPY . .

# Expose app port
EXPOSE 5035

# Run the application
CMD ["node", "index.js"]