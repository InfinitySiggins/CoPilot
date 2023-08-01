//Create web server
const express = require("express");
const app = express();
const path = require("path");
//Create server
const server = require("http").createServer(app);
//Create socket io
const io = require("socket.io")(server);
//Create port
const port = process.env.PORT || 3000;
//Create path to public folder
const publicPath = path.join(__dirname, "../public");

//Middleware
app.use(express.static(publicPath));

//Create connection
io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

//Listen port
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
