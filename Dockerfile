# Step 1: Build the React application
FROM node:18.18.0 AS build
WORKDIR /app 
  
COPY package*.json ./ 
  
RUN npm install  

COPY . .  

EXPOSE 3000 
  
CMD [ "npm", "start" ]