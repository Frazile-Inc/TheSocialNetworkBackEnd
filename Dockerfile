FROM node:18-alpine
COPY package*.json ./
COPY .env ./
COPY . .
RUN npm ci --only=production

# Expose app port
EXPOSE 5035
WORKDIR /usr/src/app

# Run the application
CMD ["node", "index.js"]