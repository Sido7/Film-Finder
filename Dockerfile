From node:16-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4000

CMD ["node","app.js"]
