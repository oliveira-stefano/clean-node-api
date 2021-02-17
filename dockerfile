FROM node:15.2

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn
# Bundle app source
COPY . .