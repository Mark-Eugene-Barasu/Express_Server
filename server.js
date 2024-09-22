// jshint ESversion:6

// const express = require(`express`);
import express, { response } from "express";
import { request } from "http";

const app = express();

app.get("/", function (request, response) {
    // to display the request in the terminal
    console.log(request)

    // to send a respond to show on the browser
    response.send("<h1>Hello there 👋</h1>");
});

app.listen(3000, function(){
    console.log(`server started at port: 3000`);
});
