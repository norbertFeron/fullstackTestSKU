FROM node:12 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build
COPY ./build ./build

EXPOSE 5000
CMD ["serve", "-s", "build"]