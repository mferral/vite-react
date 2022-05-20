FROM cypress/base:14

WORKDIR /test
ADD . ./
RUN npm i
RUN npx cypress verify