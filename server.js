//Import Dependencies
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path"); // built in node module we use to resolve paths more on this when we use it
const Coffee = require('./models/coffee'); //connects my coffee.js file
const UserRouter = require('./controllers/user');
const session = require('express-session');
const MongoStore = require('connect-mongo');

//const seed = require('./models/seed');
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
app.use(express.json());

//to set up session
app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
    saveUninitialized: true,
    resave: false,
  })
);

//Router middlewear
// Authorization Middleware
// router.use((req, res, next) => {
//   if (req.session.loggedIn) {
//     next();
//   } else {
//     res.redirect("/user/login");
//   }
// });


//Set up Multer Middlewear for photo storage in MongoDB
var multer = require('multer');
  
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
var upload = multer({ storage: storage });



//Routes
app.get("/", (req, res) => {
    res.send("Welcome to Brew Bank");
  });

const seedCoffee = require('./models/seed');
const coffee = require("./models/coffee");

app.get('/coffee/seed', (req, res) => {

  Coffee.deleteMany({}).then((data) => {
    // Seed Starter Fruits
    Coffee.create(seedCoffee).then((data) => {
      // send created fruits as response to confirm creation
      res.json(data);
    })
  });
  });

  //send user routes to user router
  app.use('/user', UserRouter);




//INDEX
app.get('/Index', (req, res) => {
    res.render('Index.jsx');
});

// app.get('/Detail', (req,res) => {
//     res.render('Detail.jsx');
//   });

app.get('/MyBrews', (req, res) => {
  res.render('MyBrews.jsx');
});

//NEW
app.get('/New', (req, res) => {
  res.render('New.jsx');
});

//DELETE
app.delete("/coffee/:id", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // delete the coffee
  Coffee.findByIdAndRemove(id)
    .then((coffee) => {
      // redirect to main page after deleting
      res.redirect("/Index");
    })
    // send error as json
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});


//UPDATE

//CREATE
//create new brew
app.post("/Coffee", (req, res) => {
  // create the New coffee
  Coffee.create(req.body)
    .then((coffee) => {
      // redirect user to Index page if successfully created item
      res.redirect("/Index");
    })
    // send error as json
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

//create user
// app.post('/Login', (req, res) => {
//   Login.create(req.body)
//       .then(ogin) => {
//         res.redirect('/Index');
//       }
//     });

// app.post('/User', (req, res) =>(
//   User.create => {
//     res.redirect()
//   }
// );


//create login
app.get('/Login', (req, res) => {
  res.render('Login.jsx');
});



// EDIT
// Edit route
app.get("/coffee/:id/edit", (req, res) => {
  // get the id from params
 const { id } = req.params
  // get the coffee from the database
  Coffee.findById(id)
    .then((coffee) => {
      // render Edit page and send coffee data
      res.render("Edit.jsx", { coffee });
    })
    // send error as json
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

// app.put("/coffee/:id/edit", (req, res) => {
//   res.render
// })



//SHOW
app.get('/Show', (req, res) => {
  Coffee.find()
    .then((coffee) => {
      // render the template with the data from the database
      res.render('Show', { coffee });
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});
  
  // find the particular coffee from the database



// Server Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));

