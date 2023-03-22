FROM node:latest

# WORKDIR /app

COPY ./react/package.json .

RUN npm install 

COPY ./react . 
# ENV REACT_APP_NAME=myName
EXPOSE 3000 

CMD ["npm", "start"]
