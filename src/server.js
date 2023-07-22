const express = require('express');
const path = require('path');

const db = require('./database');
const routes = require('./routes');

const app = express();

// Add database connection
db.connect();

// Add static files directory
app.use(express.static(path.join(__dirname, 'public')));

// Add and set the template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Add URL encoded to server to be able to receive data via POST forms
app.use(express.urlencoded({ extended: true }));

// Add routes
app.use('/', routes);

// Start server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})
