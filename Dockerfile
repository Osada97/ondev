FROM node:15

WORKDIR /ondev

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run dev