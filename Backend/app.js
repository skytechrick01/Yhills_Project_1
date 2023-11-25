const express = require("express");
const app = express();
const path = require("path");
const pug = require("pug");
const bodyParser = require('body-parser');

const Signup = require("./Signup.js");
const Post_Login = require("./Post_Login.js");

app.set("views", path.join(__dirname, "../Files/Pug"));
app.set("view engine", "pug")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/files/css', express.static('../Files/CSS'));
app.use('/files/js', express.static('../Files/JS'));
app.use('/files/img', express.static('../Files/IMG'));

app.get("/", (req, res) => {res.status(200).render("Home");})
app.get("/signup", (req, res) => {res.status(200).render("Signup", {VIS:"THIS"})});
app.get("/service", (req, res) => {res.status(200).render("Service")});
app.get("/help", (req, res) => {res.status(200).render("Help")});
app.get("/contact", (req, res) => {res.status(200).render("Contact")});

app.post("/signup", (req, res) => {Signup(req, res)});
app.get("/login", (req, res) => {res.status(200).render("Login")});
app.post("/login", (req, res) => {Post_Login(req, res)});

app.get("/successfully_Login", (req, res) => {res.status(200).render("Login_Successfully")});

app.listen("5555", () => {console.log("Connection Successful...:")});