# faye-demo
simple pub/sub messaging for web
1. Start a server

```
var http = require('http'),
    faye = require('faye');

var server = http.createServer(),
    bayeux = new faye.NodeAdapter({mount: '/'});

bayeux.attach(server);
server.listen(8000);
```

2. Create a client

```
var client = new Faye.Client('http://localhost:8000/');
client.subscribe('/messages', function(message) {
  alert('Got a message: ' + message.text);
});

```

3. Send messages

```
client.publish('/messages', {
  text: 'Hello world'
});
```
