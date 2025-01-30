# Use the official Node.js image
FROM node:18

# Set the working directory to the folder containing the Dockerfile (assuming server.js is here)
WORKDIR /server

# Copy package.json and install dependencies
COPY package.json package-lock.json ./ 
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose the backend port
EXPOSE 5000

# Run the app
CMD ["npm", "start"]
