const express = require("express");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const session = require("express-session");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 8000;

// Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Static directory
app.use(express.static("public"));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define session storage
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: "Secret!#PhraseBy&#/Dan1el&/%¤Secret#!Phrase",
  })
);

// Routes
app.get("/", (req, res) => {
  res.render("home"); // Skicka både skills och projects till Handlebars
});

app.get("/about", (req, res) => {
  res.render("about"); // Skicka både skills och projects till Handlebars
});

app.get("/skills", (req, res) => {
  res.render("skills"); // Skicka både skills och projects till Handlebars
});

app.get("/projects", (req, res) => {
  const projects = JSON.parse(fs.readFileSync("projects.json", "utf8"));
  res.render("projects", { projects }); // <-- skickar in projekten till Handlebars
});

app.get("/contact", (req, res) => {
  res.render("contact"); // Skicka både skills och projects till Handlebars
});


// Returnerar alla projekt, bara med basic info
app.get("/api/projects", (req, res) => {
  const projects = JSON.parse(fs.readFileSync("projects.json", "utf8"));
  const liteProjects = projects.map(p => ({
    id: p.id,
    title: p.title,
    coverImage: p.coverImage
  }));
  res.json(liteProjects);
});


// Starta servern
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });