FROM node:8

WORKDIR /App/server/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000
CMD [ "npx", "nodemon", "index.js" ]
