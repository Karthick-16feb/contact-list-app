# yo base image for node.js..
FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./ 

# yo dependancy install using npm..
RUN npm install

#yo copying entire source of app to the container now..
COPY . .
RUN chmod +x /app/start.sh

#yo port 3000 for dev server and 5001 for node.js server..
EXPOSE 3000 5001

#yo first step after container hosted..
CMD ["/bin/sh", "/app/start.sh"]
