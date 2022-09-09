FROM node:14.17.0-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm cache verify
RUN npm install
COPY . /app
RUN npm run build --prod

FROM nginx:1.20.1-alpine
COPY default.conf /etc/nginx/conf.d
COPY --from=build-step /app/dist/summer-activities-for-kids-font-end /usr/share/nginx/html
EXPOSE 4200:80
