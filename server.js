/*
* @Author: liudong
* @Date:   2017-11-16 11:24:57
* @Last Modified by:   liudong
* @Last Modified time: 2017-11-16 11:27:56
*/
'use strict';
const http = require('http');
const faye = require('faye');
const server = http.createServer();
const bayeux = new faye.NodeAdapter({mount: '/'});
bayeux.attach(server);
server.listen(8000);
