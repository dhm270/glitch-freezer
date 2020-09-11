const express = require("express");
const app = express();
const fs = require("fs");

app.get("/get", (request, response) => {
	response.send("test");
});