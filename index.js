const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World2!')
})



app.listen(80, () => console.log('Server is up and running'));