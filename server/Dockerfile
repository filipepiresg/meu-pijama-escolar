FROM node:current-alpine
RUN mkdir -p /usr/src/meu-pijama/server
WORKDIR /usr/src/meu-pijama/server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "start"]