# react-mysql-express-app
## Docker-Compose application
### React application with a NodeJS backend and a MySQL database


The compose file defines an application with three services `frontend`, `backend` and `db`.
When deploying the application, docker-compose maps port 3000 of the frontend service container to port 3000 of the host as specified in the file.
Make sure port 3000 on the host is not already being in use.

## Deploy with docker-compose

```
$ docker-compose up -d
```

After the application starts, navigate to `http://localhost:3000` in your web browser.

Stop and remove the containers
```
$ docker-compose down
```
