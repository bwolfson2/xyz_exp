const http = require("http");
const fs = require("fs");
const path = require("path");
const express = require("express"); // Add this line to import Express.js

const app = express(); // Create an Express app

// Serve static files from the "public" folder
app.use(express.static('public'));

app.get("/micro", (req, res) => {
  // Determine the file path for "regular_search_micro.html"
  const filePath = path.join(__dirname, "regular_search_micro.html");

  // Read the file and send its contents as the response
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      // Return a 500 error if there's an error reading the file
      res.status(500).send("500 Internal Server Error");
      return;
    }

    // Set the content type based on the file extension
    if (path.extname(filePath) === ".html") {
      res.setHeader("Content-Type", "text/html");
    } else if (path.extname(filePath) === ".css") {
      res.setHeader("Content-Type", "text/css");
    }

    res.send(data);
  });
});

app.get("/xyz", (req, res) => {
  // Determine the file path for "xyz_search_micro.html"
  const filePath = path.join(__dirname, "xyz_search_micro.html");

  // Read the file and send its contents as the response
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      // Return a 500 error if there's an error reading the file
      res.status(500).send("500 Internal Server Error");
      return;
    }

    // Set the content type based on the file extension
    if (path.extname(filePath) === ".html") {
      res.setHeader("Content-Type", "text/html");
    } else if (path.extname(filePath) === ".css") {
      res.setHeader("Content-Type", "text/css");
    }

    res.send(data);
  });
});


app.get("/micro_linked", (req, res) => {
    // Determine the file path for "regular_search_micro.html"
    const filePath = path.join(__dirname, "mod_regular_search_micro.html");
  
    // Read the file and send its contents as the response
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        // Return a 500 error if there's an error reading the file
        res.status(500).send("500 Internal Server Error");
        return;
      }
  
      // Set the content type based on the file extension
      if (path.extname(filePath) === ".html") {
        res.setHeader("Content-Type", "text/html");
      } else if (path.extname(filePath) === ".css") {
        res.setHeader("Content-Type", "text/css");
      }
  
      res.send(data);
    });
  });
  
app.get("/xyz_linked", (req, res) => {
    // Determine the file path for "xyz_search_micro.html"
    const filePath = path.join(__dirname, "mod_xyz_search_micro.html");
  
    // Read the file and send its contents as the response
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        // Return a 500 error if there's an error reading the file
        res.status(500).send("500 Internal Server Error");
        return;
      }
  
      // Set the content type based on the file extension
      if (path.extname(filePath) === ".html") {
        res.setHeader("Content-Type", "text/html");
      } else if (path.extname(filePath) === ".css") {
        res.setHeader("Content-Type", "text/css");
      }
  
      res.send(data);
    });
  });
  

// Handle other routes here

// Start the Express server on port 3000
const server = http.createServer(app);
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
