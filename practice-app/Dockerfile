FROM node:latest

RUN mkdir -p /usr/src/frontend-app
WORKDIR /usr/src/frontend-app

COPY package.json /usr/src/frontend-app

RUN npm install

CMD ["npm", "start"]