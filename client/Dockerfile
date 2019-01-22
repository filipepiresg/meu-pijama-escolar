FROM node:alpine
RUN mkdir -p /usr/src/client/app
WORKDIR /usr/src/client/app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]