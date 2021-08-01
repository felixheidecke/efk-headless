FROM node:14

RUN mkdir /srv/web/
WORKDIR /srv/web/

COPY package.json ./

RUN npm install

EXPOSE 8080/tcp

CMD [ "npm", "run", "dev" ]