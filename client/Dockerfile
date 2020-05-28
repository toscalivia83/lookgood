FROM node:12.2.0-alpine as react_build

RUN mkdir -p /usr/src/app

ENV PATH="/root/.nvm/versions/node/v6.10.0/bin:$PATH"

#also say 
WORKDIR /usr/src/app
#copy the react app to the container
COPY . /usr/src/app/

# #prepare the contiainer for building react 
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent 
RUN npm build

ADD src /usr/src/app/src

# CMD ["npm", "start"]

EXPOSE 3000

#prepare nginx
# FROM nginx:1.16.0-alpine

# COPY --from=react_build /usr/src/app /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY /nginx/default.conf /etc/nginx/conf.d


# # #fire up nginx
# EXPOSE 80
# CMD ["nginx","-g","daemon off;"]

# FROM node:8.7.0-alpine

# RUN mkdir -p /usr/src/app

# WORKDIR /usr/src/app

# COPY package.json /usr/src/app/

# RUN npm install --silent
# RUN npm install react-scripts@3.4.1 -g --silent

# RUN npm build

# FROM nginx:latest

# EXPOSE 80

# ADD src /usr/src/app/src
# ADD public /usr/src/app/public

# COPY . ./usr/share/nginx/html

# RUN rm /etc/nginx/conf.d/default.conf
# COPY /nginx/default.conf /etc/nginx/conf.d

# CMD ["nginx", "-g", "daemon off"]

# # CMD [ "npm", "start" ]







# # FROM node:8.7.0-alpine

# # RUN mkdir -p /usr/src/app/lookgood-ui-without-parcel

# # WORKDIR /usr/src/app/lookgood-ui-without-parcel

# # COPY package.json /usr/src/app/lookgood-ui-without-parcel

# # RUN npm install --silent
# # COPY . /usr/src/app/lookgood-ui-without-parcel


# # CMD ["npm", "run", "start"]


# # FROM node:lts-slim

# # RUN mkdir -p /usr/src/app

# # WORKDIR /usr/src/app

# # COPY package.json ./

# # RUN npm install --silent
# # RUN npm install react-scripts@3.4.1 -g --silent

# # COPY . ./

# # EXPOSE 3000
# # CMD [ "npm", "run", "start" ]