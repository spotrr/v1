const express = require('express');
const path = require('path');

const app = express();
const index = path.join(__dirname, '../client/index.html');
const PORT = 3000;

// const MONGO_URI = ''
// mongoose.connect(MONGO_URI, {
//     // options for the connect method to parse the URI
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // sets the name of the DB that our collections are part of
//     dbName: ''
//   })
//     .then(() => console.log('Connected to Mongo DB.'))
//     .catch(err => console.log(err));

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '..', '/client/')));

app.get('/', (req, res) => {
  res.status(200).sendFile(index);
});

app.get('/main', (req, res) => {
  return res.status(200).sendFile(index);
});

app.get('/profile', (req, res) => {
  return res.status(200).sendFile(index);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
