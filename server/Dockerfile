FROM node:8.7.0-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install

ADD src /usr/src/app/src

EXPOSE 5000

CMD [ "npm", "start" ]