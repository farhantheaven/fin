const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const request = require('request')
const Promise = require('bluebird')
const organizationId  = 649249007
const zohoUrl  = `https://books.zoho.com/api/v3/organizations?organization_id=${organizationId}`;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(pino);app.get('/api/getContactsDetails', (req, res) => {
    console.log('hello worlds')
    return new Promise((resolve, reject) => {
      request({
        uri: zohoUrl,
        method: 'GET',
        headers: {
          'Authorization': 'Zoho-oauthtoken db36e02a50b57e081efe533a8a0f834b',
          'Content-Type': 'application/json'
        }      },(err,reponse ,objData) => {
        console.log('check for the result')
         objData  = [{
          name: 'neo',
          fname: 'the',
          lname: 'matrix',
          age: 25,
          extra: 'neo the saviour',
          phone: '132435465'
        },{
          name: 'iran',
          fname: 'man',
          lname: 'logic',
          age: 25,
          extra: 'the iron man',
          phone: '132435465'
        }]
        res.send(JSON.stringify({ greeting: objData}));      })
    })  
});app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);