# FROM nginx:alpine

# COPY /build/ /usr/share/nginx/html/
# COPY /default.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80

FROM mhart/alpine-node:14.17.3 AS builder

WORKDIR /app
COPY / .
RUN ls -la
RUN apk add --no-cache git openssh
RUN yarn install
RUN ls -la
RUN yarn run build

FROM nginx:alpine as stage

COPY --from=builder /app/build/ /usr/share/nginx/html/
COPY --from=builder /app/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
