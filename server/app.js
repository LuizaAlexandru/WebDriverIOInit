require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

  // Add headers
  app.use((req, res, next) => {

      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT);

      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', true);

      // Pass to next layer of middleware
      next();
  });

app.get('/product/:id', (req, res) => {

  const id = req.params.id;
  console.log('ID: ', id);
  res.send('ID: '+ id);
})

app.post('/login', (req,res) => {
  let data = req.body;
  res.send('Data Received: ' + JSON.stringify(data));
  console.log(req)

})

module.exports = app;

