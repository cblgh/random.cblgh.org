FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app deps from both package.json & package-lock.json
COPY package*.json ./
RUN npm i

# Bundle yr source code inside the docker image
COPY . .

EXPOSE 7331

# Starting command for the container
CMD ["npm", "start"]
