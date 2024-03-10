FROM mcr.microsoft.com/vscode/devcontainers/typescript-node

EXPOSE 4000 4200 4433 5000 8080 9876

RUN apt update -y && apt upgrade -y

RUN npm install -g npm@latest

RUN npm install -g @vue/cli

# Go! (And keep going.)
CMD ["tail", "--follow", "/dev/null"]
