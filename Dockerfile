FROM node:argon
RUN apt-get update
RUN apt-get install net-tools

# Install app dependencies
# COPY package.json /usr/src/app/

RUN mkdir /myapp
WORKDIR /myapp
ADD package.json /myapp/package.json
RUN npm install
RUN npm install -g webpack
ADD . /myapp
EXPOSE 3000
CMD [ "npm", "start" ]
