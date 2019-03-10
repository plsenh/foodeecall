const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const users = require("./routes/api/users");
const routes = require("./routes");
const app = express();
let PORT = process.env.PORT || 3001;

// ======================
// Middleware

// Express aoo
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Authentication - sessions track user login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// ======================
// Add routes, both API and view
// app.use("/api/users", users);
app.use(routes);

// ======================
// Connect to MongoDB
// const db = require("./config/keys").mongoURI;
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/foodeecall";

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// ======================
// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
