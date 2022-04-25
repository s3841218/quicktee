# code adapted from
# [12]R. Schachte, "simple-engineer-aws-deployment-tutorial/Dockerfile at master · Schachte/simple-engineer-aws-deployment-tutorial", GitHub, 2022. [Online]. Available: https://github.com/Schachte/simple-engineer-aws-deployment-tutorial/blob/master/Dockerfile. [Accessed: 23- Apr- 2022].

FROM node:16-alpine as build
WORKDIR '/app'
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/web
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]