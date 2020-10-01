const dotenv = require('dotenv');
dotenv.config();

const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  connectDB = require('../config/db');

const app = express();
connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use('/api/users', require('./routes/User.route'));
// app.use('/api/auth', require('./routes/Auth.route'));
app.use('/api/stories', require('./routes/Story.route'));


// //production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  app.post('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  })
}

// //build mode
if (process.env.NODE_ENV === 'development') {
  app.use(express.static(path.join(__dirname, 'public')));
  app.post('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  })
}

const PORT = parseInt(process.env.PORT, 10) || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});