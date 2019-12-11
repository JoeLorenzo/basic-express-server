// this imports the express package
const express = require("express");

// this creates the server
const server = express();

// this handles requess to the "/" path
server.get("/", (req, res) => {
  res.send("Hello from express");
});

// listen is an express method for the listen port.
const port = 5000;
server.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});


