FROM node:18-alpine

WORKDIR /usr/src/app

# Copy package.json and package-lock.json/yarn.lock/pnpm-lock.yaml
COPY package*.json ./

# Install dependencies - using legacy-peer-deps to avoid potential conflicts with older React versions
RUN npm install --legacy-peer-deps

# Copy all source files
COPY . .

# Build the Next.js application for production
RUN npm run build

# Expose the port Next.js is configured to run on in package.json
EXPOSE 5001

# Run the app
CMD ["npm", "start"]
