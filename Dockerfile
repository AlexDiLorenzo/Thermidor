FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY server/package.json server/package-lock.json* ./server/
RUN cd server && npm install --production

# Copy server code
COPY server/ ./server/

# Copy frontend files to public/
COPY index.html receptions.html ./public/
COPY css/ ./public/css/
COPY js/ ./public/js/
COPY images/ ./public/images/

EXPOSE 3000

CMD ["node", "server/index.js"]
