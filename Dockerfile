# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the source code to the working directory
COPY . .

# Build the NestJS application
RUN yarn build

# Remove development dependencies
RUN yarn install --production

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["yarn", "start:prod"]