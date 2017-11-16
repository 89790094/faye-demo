# faye-demo
simple pub/sub messaging for web
## Install

```
npm i faye --save
```

## Demo Code

1. Start a server

**server.js**

```
const http = require('http');
const faye = require('faye');
const server = http.createServer();
const bayeux = new faye.NodeAdapter({mount: '/'});
bayeux.attach(server);
server.listen(8000);
```

2. Create a client

**Node-Client:client.js**

```
const faye = require('faye');
const client = new Faye.Client('http://localhost:8000/');
client.subscribe('/messages', function(message) {
  alert('Got a message: ' + message.text);
});
client.publish('/messages', {text: 'Hello world'});
```

**Browse-Client:client.html**

```
<script type="text/javascript" src="faye-browser-min.js"></script>
<script type="text/javascript">
    var client = new Faye.Client('http://localhost:8000/');
    //sub
    client.subscribe('/messages', function(message) {
      console.log('Got a message: ' + message.text);
    });
    //pub
    client.publish('/messages', {text: 'Hello world'});
</script>

```

3. Server-side Publish messages

**publish event**

```
const faye = require('faye');
const bayeux = new faye.NodeAdapter({mount: '/'});
bayeux.getClient().publish('/messages', {text: 'hello world'})
```
