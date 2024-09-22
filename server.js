// jshint ESversion:6

// const express = require(`express`);
import express, { response } from "express";
import { request } from "http";

const app = express();

// for the home page
app.get("/", function (request, response) {
    // to display the request in the terminal
    console.log(request)

    // to send a respond to show on the browser
    response.send("<h1>Hello Mark 👋</h1>");
});

// for the contact me page
app.get("/contact", function (req, res){
    res.send(`contact me on <strong><a href="mailto:mark0630227248@gmail.com">mark0630227248@gmail.com</a></strong>`);
});

// for the about page
app.get("/about", function(req, res) {
    res.send(`My name is Eugene Mark Korku Barasu, I have mastered HTML, CSS, SCSS & SASS, JavaScript, Node.JS, Python, MySQL, AngularJS, JSON, Java and still learning.I have mastered HTML, CSS, SCSS & SASS, JavaScript, Node.JS, Python, MySQL, AngularJS, JSON, Java and still learning.`)
})

// for hobbies page
app.get("/hobbies", function(req, res) {
    res.send(`<ul><li>coding</li><li>music</li><li>ethical hacking</li></ul>`);
})


app.listen(3000, function(){
    console.log(`server started at port: 3000`);
});
