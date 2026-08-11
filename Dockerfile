FROM node:18-bullseye-slim

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./
RUN npm ci --only=production

COPY . ./

RUN npm install

CMD ["npm", "test"]
