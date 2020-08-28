We're a tracking company and we love maps.
We'd like to provide feedback to our customers about their devices and for that we'd like to provide them a map in which they could easily identify where their devices are.
We'd like to be able to show the information related with each device in a popup with its correspondent data when we click on the device location. We'd like to show the information using icons and colors.

This project is a sample of how an application of these characteristics can be developed.
The stack used is: **Vue.js** as base framework, **leaflet.js** to provide the map, **FontAwesome** for the icons. We use **lint** and **prettier** to format and **lint** the code. Also we provide a **Dockerfile** and a **nginx** configuration to easily build and run the application in a **docker** container. We integrate this repository with **Travis CI** so we can lint, **unit test**, and finally deploy the resulting application to **Firebase hosting**.

You can see the result demo [here](https://device-tracking-5e5a4.web.app/)

As i said this is a demo that needs more work, optimization work above all, since the result bundle it's exceeding the recommended limits and that has penalties, also it loads all the points at once... [read more](README.md#TODO)

## Setup with docker

1. clone this repo

```
git clone https://github.com/sanjmen/iot-device-tracking
```

2. change to repo directory

```
cd iot-device-tracking
```

3. Build your docker image
```
docker build . -t iot-device-tracking
```

4. Run your docker image

```
docker run -d -p 8080:80 iot-device-tracking
```

5. Get home page with curl

```
curl localhost:8080
```

returns

```
<!DOCTYPE html><html lang=en><head><meta charset=utf-8><meta http-equiv=X-UA-Compatible content="IE=edge"><meta name=viewport content="width=device-width,initial-scale=1"><link rel=icon href=/favicon.ico><title>device-tracking</title><link href=/css/app.c8095559.css rel=preload as=style><link href=/css/chunk-vendors.c99126ea.css rel=preload as=style><link href=/js/app.f25054ad.js rel=preload as=script><link href=/js/chunk-vendors.d3685142.js rel=preload as=script><link href=/css/chunk-vendors.c99126ea.css rel=stylesheet><link href=/css/app.c8095559.css rel=stylesheet></head><body><noscript><strong>We're sorry but device-tracking doesn't work properly without JavaScript enabled. Please enable it to continue.</strong></noscript><div id=app></div><script src=/js/chunk-vendors.d3685142.js></script><script src=/js/app.f25054ad.js></script></body></html>
```

4. Open in browser

```
http://localhost:8080
```

you should see

<img width="1655" alt="Screenshot 2020-08-28 at 15 33 26" src="https://user-images.githubusercontent.com/1140689/91566582-2f5ea080-e944-11ea-840d-f5f13a885884.png">


## Long setup
1. clone this repo

```
git clone https://github.com/sanjmen/iot-device-tracking
```

2. change to repo directory

```
cd iot-device-tracking
```

3. install dependencies
```
yarn install
```

4. compiles and hot-reloads for development

```
yarn serve
```

5. compiles and minifies for production

```
yarn build
```

6. run your unit tests

```
yarn test:unit
```

7. lints and fixes files

```
yarn lint
```


## TODO
* Optimize bundle size
* Load points for the current map bounds (ideally we need an REST API)


