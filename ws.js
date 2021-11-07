var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({port: 40510})

var os = require('os');

wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log('RECEIVED: %s', message)
  })

  ws.on('close', function (event) {
    console.log('CLOSED:', event)
  })

  setInterval(
    () => ws.send(`${JSON.stringify({avg:os.loadavg(), memory:os.totalmem(), free:os.freemem()})}`),
    1000
  )
})
