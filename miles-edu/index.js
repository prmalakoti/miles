const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = 3001;
app.get('/', (req, res) => {
  res.send("Hello World");
});
const customerRoutes = require('./router')
// using as middleware
app.use('/api/productLikes', customerRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});