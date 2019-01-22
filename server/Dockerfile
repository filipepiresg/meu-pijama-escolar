FROM node:alpine
RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "start"]