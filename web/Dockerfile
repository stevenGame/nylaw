# syntax=docker/dockerfile:1.4

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/


ARG NODE_MAJOR=18
ARG NODE_VERSION=${NODE_MAJOR}.17.1

FROM node:${NODE_VERSION}-alpine AS development

WORKDIR /code

# Expose the port that the application listens on.
RUN npm config set registry https://registry.npmmirror.com

# Run the application as a non-root user.
# USER node

# Copy the rest of the source files into the image.
COPY ./web web
COPY ./common common

WORKDIR /code/web

# test using lite server
# CMD npx lite-server

# Run the application.
# CMD npx ng serve --host 0.0.0.0
FROM development as dev-package
WORKDIR /code/web
RUN npm i


CMD npx ng serve --host 0.0.0.0
EXPOSE 4200

FROM development AS builder
RUN npm i
RUN npm run build

FROM development as dev-envs
RUN apk update && apk add git \
    shadow

RUN useradd vscode && \
    groupadd docker && \
    usermod -aG docker vscode

# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /

FROM nginx:1.13-alpine as prod
EXPOSE 80 443
COPY --from=builder /code/web/dist/ai-trade /usr/share/nginx/html
COPY ./web/nginx.conf  /etc/nginx/conf.d/default.conf
