FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @vue/cli

COPY . .

RUN npm run build

ENV HOST=0.0.0.0

EXPOSE 8080

CMD ["npm", "run", "dev"]