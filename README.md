# device-tracking

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Lints and fixes files

```
yarn lint
```

### Deploy

In order to deploy your application using nginx inside of a docker container a `Dockerfile` and `nginx.conf` files are provided in the root of the project.

1. Build your docker image

```
docker build . -t device-tracking
```

2. Run your docker image

```
docker run -d -p 8080:80 device-tracking
```

3. Get home page with curl

```
curl localhost:8080
```

4. Open in browser

```
http://localhost:8080
```
