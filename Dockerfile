FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY ./ .
EXPOSE 9001
CMD ["npm","run", "start"]