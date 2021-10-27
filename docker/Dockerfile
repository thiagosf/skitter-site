FROM node:10
WORKDIR /var/www
COPY package.json .
RUN npm install
RUN ./node_modules/.bin/bower install --allow-root
COPY . .
CMD ["npm", "start"]
