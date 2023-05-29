FROM node:18
FROM postgres:latest

# Set the working directory
WORKDIR /HW11

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app's source code
COPY . .

# Copy the SQL initialization script
COPY init.sql /docker-entrypoint-initdb.d/init.sql

# Specify the command to run the app
CMD npm run dev1
