# Dockerfile
FROM node:14

# Set the working directory
WORKDIR /HW11

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app's source code
COPY . .

# Specify the command to run the app
CMD npm run dev