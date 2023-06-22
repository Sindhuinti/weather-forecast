FROM node:14.16.0-alpine3.13
WORKDIR .
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm","start"]
