require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home/index.html")
})

// Handle Error Requests
app.use((req, res, next) => {
    const error = new Error()
    error.message = 'Not Found'
    error.status = 404
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: error,
        msg: 'erro interno'
    })
})

/* 
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.message = 'Invalid route';
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message,
    },
  });
});
*/

module.exports = app
