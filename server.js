//Import Dependencies
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path"); // built in node module we use to resolve paths more on this when we use it
const coffee = require('./models/coffee'); //connects my coffee.js file
//const users = require('./models/users'); //connects my users.js file
//connect my css file;
//connect my Show files;
//connect my Default file;


//Establish Database Connection
// Setup inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG);

// Events for when connection opens/disconnects/errors
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

// Create our Express Application Object Bind Liquid Templating Engine
const app = express()
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

// Register Middleware
app.use(morgan("tiny")); //logging
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically

//Routes
app.get("/", (req, res) => {
    res.send("Welcome to Brew Bank");
  });

// Server Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));


//INDEX
app.get('/Index', (req, res) => {
    res.render('Index.jsx');
  });

//NEW
// app.get("New", (req, res) => {
//   res.render("views/New");
// });

//D

//U

//C

//E

//Show
// app.get("/coffee/:id", (req, res) => {
//   // get the id from params
//   const id = req.params.id;

//   // find the particular coffee from the database
//   Coffee.findById(id)
//     .then((fruit) => {
//       // render the template with the data from the database
//       res.render("views/Show", { coffee });
//     })
//     .catch((error) => {
//       console.log(error);
//       res.json({ error });
//     });
// });


