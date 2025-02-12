FROM node:16-alpine

WORKDIR /app

COPY package* .

RUN npm install

COPY . .



EXPOSE 4000

CMD ["node","app.js"]
