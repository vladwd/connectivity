# nodejs websocket long polling example
it is an example of implementing websocket(ws) and long polling on both server and client side

See original example here github.com:wahengchang/nodejs-websocket-example.git

## Install
clone this repo then
```
$ npm install --save ws express
```
There are 3 basic must know fucntions:
 - `ws.onopen` : emmited when connected
 - `ws.send` : sending a send event to websocket server
 - `ws.onmessage` : event emmited when receiving message 

([Read More](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications))

## Run
Before the first run, install packages
```
$ npm install express
``` 
Run server
```
$ npm start
``` 

Open browser
```
http://localhost:3000/
```

## Docker
Put your source files into a directory, e.g. "example"

Run docker container with this directory in a volume
```
docker run -itd --name mynode -p 3000:3000 -p 40510:40510 -v ${PWD}/example:/example node:stretch npm start --prefix example
```

## Reference
 - [https://github.com/wahengchang/nodejs-websocket-example](https://github.com/wahengchang/nodejs-websocket-example)
 - [https://github.com/websockets/ws](https://github.com/websockets/ws)
 - [https://websockets.github.io/ws/](https://websockets.github.io/ws/)
