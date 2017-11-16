/*
* @Author: liudong
* @Date:   2017-11-16 11:58:00
* @Last Modified by:   liudong
* @Last Modified time: 2017-11-16 14:39:00
*/
const faye = require('faye');
const client = new faye.Client('http://localhost:8000');
client.publish('/messages', {
  text: 'send to message'
});