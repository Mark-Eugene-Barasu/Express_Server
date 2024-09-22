// jshint ESversion:6

// const express = require(`express`);
import express from "express";

const app = express();

app.listen(3000, function(){
    console.log(`server started at port: 3000`);
});
