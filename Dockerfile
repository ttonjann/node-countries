FROM node:latest

WORKDIR /dockerapp

COPY package*.json ./
RUN npm install
COPY . .

CMD ["node", "src/app.js"]



