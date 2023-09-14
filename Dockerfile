# The docker image to use from the docker hub
# Also called the parent image of our docker image
# FROM base_image:tag
FROM node:16.14.2

# Set metadata about the image (optional)
#LABEL maintainer="Your Name <your.email@example.com>"
LABEL maintainer="M Mohsin Shahzad <m.mohsin.shahzad0582@gmail.com>"


# Current working directory of our application which has all the files
# comment this line if you have defined work dir in compose.yaml
# WORKDIR /path/to/directory
# WORKDIR ./node-postgres-redis

# Copies files from the host system into the container image
# COPY source_path destination_path
COPY ./ ./

# Runs commands during the image build process
# You can use this to install packages, update software, and perform other setup tasks
RUN npm install -g npm@8.5.0
RUN npm cache clean --force


# Specifies the default command to run when a container is started
# /bin/bash always us to access bash in the given WORKDIR
# It usually comes at the end
# CMD ["command", "arg1", "arg2"]
# CMD ["npm", "run", "start-dev"]
# CMD ["/bin/bash"]
# -c is used to specify the command to run within the shell.
# CMD ["/bin/sh", "-c", "npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all"]