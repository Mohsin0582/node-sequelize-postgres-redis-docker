# The Project is developed in Ubuntu 22.xx.xx

# Node Sequelize Postgres Redis Docker
This is a scalable project boilerplate for applications being developed using the ExpresJs Sequelize Postgres Redis and Docker technologies. Dockerfile is used with compose.yml to connect the different pieces of Redis and Postgres in a single container. Compose yml file is well commented for the sake of understanding each command.

This is an exemplary reusable, scalable, optimized dockerized code. 


# Running the application using docker
Make sure you stop your host/machine postgres and redis
Postgres:
sudo systemctl stop postgresql 

Redis:
sudo systemctl stop redis-server 


# Docker compose for building containers
docker compose up --build


# Docker compose for stopping and removing containers
docker compose down -v


# If still not all containers are completely removed
Stop all containers:
docker stop $(docker ps -aq)

Remove all containers:
docker rm $(docker ps -aq)

Remove all containers:
docker rmi $(docker images -q)


# Docker for checking running containers
docker ps -a

# Getting inside the running containers
docker exec -it [CONTAINER_ID] /bin/bash


# Check endpoint
http://localhost:3000/api/posts


# Note
- We have used sequelize for postgres database
- But if don't use sequelize for postgres database, then i have included the 
postgres folder that is compatible with docker as well


# Sequelize
# Create Models and Migrations
sequelize model:generate --name User --attributes name:string,email:string

sequelize model:generate --name Post --attributes title:string,content:text,userId:integer

sequelize model:generate --name Comment --attributes postId:integer,comment:text,userId:integer


# Translate the Migrations into Tables
sequelize db:migrate


# Create Seed Files
sequelize seed:generate --name User

sequelize seed:generate --name Post

sequelize seed:generate --name Comment


# Seed The Database
sequelize db:seed:all
