const express = require('express');
const path = require("path");
const controller = require("./controllers/mainController");
const bodyParser = require('body-parser');

const app = express();

require("dotenv").config({ path: ".env" });

// view engine setup
app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());


// Gotta be able to read the body
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  next();
});

app.set("port", process.env.PORT || 7070);
const server = app.listen(app.get("port"), () => {
    console.log(`I'm up and running on port ${server.address().port}`);
});

app.get('/', controller.homePage);
app.post('/', controller.makePretty);
app.post('/parse-file', controller.parseFile);
