FROM node:20-alpine

# Build-time arguments
ARG NODE_ENV
ARG PORT

# Set runtime environment variables from build args
ENV NODE_ENV=$NODE_ENV
ENV PORT=$PORT

WORKDIR /app
COPY package.json .
RUN npm install --production
COPY . .

EXPOSE $PORT
CMD ["node", "index.js"]
