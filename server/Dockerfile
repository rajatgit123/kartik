FROM node:8

WORKDIR /server/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000
CMD [ "npx", "nodemon", "index.js" ]
