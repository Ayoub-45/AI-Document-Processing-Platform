# Use the latest LTS version of Node.js on Alpine Linux
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and lock files first (optimizes Docker layer caching)
COPY package*.json ./

# Install all dependencies (including devDependencies like nodemon)
RUN npm install

# Copy the rest of your source code
COPY . .

# Expose the port your backend runs on (e.g., 3000)
EXPOSE 3000

# Start the application in development mode
# Note: Ensure you have a "dev" script in package.json using nodemon
CMD ["npm", "run", "dev"]
