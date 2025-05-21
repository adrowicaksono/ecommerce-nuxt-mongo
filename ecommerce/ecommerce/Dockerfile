# Use Node.js 14 (which should be more compatible with Nuxt 1.0.0)
FROM node:14-slim

# Create app directory
WORKDIR /usr/src/app

# Install Python and other build dependencies
RUN apt-get update && apt-get install -y \
    python3 \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Create symlink for python
RUN ln -sf /usr/bin/python3 /usr/bin/python

# Upgrade npm to a stable version
RUN npm install -g npm@8.19.4

# Set environment variable for node-gyp to use Python 3
ENV PYTHON=/usr/bin/python3

# Copy package files
COPY package*.json ./

# Install dependencies with increased memory limit
ENV NODE_OPTIONS=--max_old_space_size=4096
RUN npm install --build-from-source

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Set production environment
ENV NODE_ENV=production
ENV HOST=0.0.0.0

# Command to run the application
CMD [ "npm", "start" ]