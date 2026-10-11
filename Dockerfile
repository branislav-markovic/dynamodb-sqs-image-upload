FROM node:26-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3981

CMD ["npx", "tsx", "index.ts"]