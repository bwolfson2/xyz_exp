const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath;

  // Determine the file path based on the request path
  if (req.url === "/micro") {
    filePath = path.join(__dirname, "regular_search_micro.html");
  } else if (req.url === "/xyz") {
    filePath = path.join(__dirname, "xyz_search_micro.html");
  } else {
    // Return a 404 error if the requested path is not recognized
    res.statusCode = 404;
    res.end("404 Not Found");
    return;
  }

  // Read the file and send its contents as the response
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      // Return a 500 error if there's an error reading the file
      res.statusCode = 500;
      res.end("500 Internal Server Error");
      return;
    }

    // Set the content type based on the file extension
    if (path.extname(filePath) === ".html") {
      res.setHeader("Content-Type", "text/html");
    } else if (path.extname(filePath) === ".css") {
      res.setHeader("Content-Type", "text/css");
    }

    res.end(data);
  });
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
