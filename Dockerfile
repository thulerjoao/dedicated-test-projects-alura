FROM node:20-slim

# RUN apt update && apt install -y someting

USER node

RUN mkdir -p /home/node/react-app

WORKDIR /home/node/react-app

CMD [ "/home/node/react-app/.docker/start-dev.sh" ]

