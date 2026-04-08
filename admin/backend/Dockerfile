FROM node:18-alpine

WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all the backend files
COPY . .

# Expose the API port
EXPOSE 5000

# Start development server or production server
# Note: In production you would typically use "node index.js"
CMD ["node", "index.js"]
