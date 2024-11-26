# Step 1: Base image for Node.js
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json for dependencies installation
COPY package.json package-lock.json ./ 

# Step 4: Install dependencies for both frontend and backend
RUN npm install

# Step 5: Copy the entire app source to the container
COPY . .

# Step 6: Ensure the start.sh script is executable
RUN chmod +x /app/start.sh

# Step 7: Expose ports for both the frontend and backend
EXPOSE 3000 5001

# Step 8: Run the start script when the container is started
CMD ["/bin/sh", "/app/start.sh"]
