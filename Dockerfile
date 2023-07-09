# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the server code and HTML files to the container
COPY . ./

# Expose the server port
EXPOSE 3000

# Start the server
CMD [ "node", "server.js" ]
