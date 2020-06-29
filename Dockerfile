FROM node:13.7.0

ARG APP_DIR

RUN apt-get update && apt-get install -qq -y \
    shellcheck \
  && rm -rf /var/lib/apt/lists/*

WORKDIR ${APP_DIR}/

COPY package.json ${APP_DIR}/
COPY package-lock.json ${APP_DIR}/
COPY scripts/install_dependencies.sh ${APP_DIR}/scripts/install_dependencies.sh
RUN scripts/install_dependencies.sh

COPY . ${APP_DIR}
