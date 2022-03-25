const express = require("express");
const path = require("path");
const dotenv  = require("dotenv");
const socketio = require("socket.io");
const http = require("http");
const Filter = require("bad-words");

dotenv.config();

const app = express();
// init socketio server
const server = http.createServer(app)
const io = socketio(server);
const { generateMessage, generateLocationMessage } = require("./utils/messages");
const { addUser, removeUser, getUser, getUsersInRoom } = require("./utils/users");


io.on("connection", socket => {
    console.log("New user connection");
  
    socket.on("join", (options, callback) => {
      const { error, user } = addUser({ id: socket.id, ...options });
      if (error) {
        return callback(error);
      } else {
        socket.join(user.room);
        console.log(user);
        socket.emit("message", generateMessage("Admin", "Welcome!"));
        // send for all user
        socket.broadcast.to(user.room).emit("message", generateMessage("Admin", `${user.username} has joined!`));
        io.to(user.room).emit("roomData", {
          room: user.room,
          users: getUsersInRoom(user.room)
        });
  
        callback();
      }
    });
  
    socket.on("sendMessage", (message, callback) => {
      const user = getUser(socket.id);
      const filter = new Filter();
  
      if (filter.isProfane(message)) {
        return callback("Profanity is not allowed!");
      } else {
        io.to(user.room).emit("message", generateMessage(user.username, message));
        callback();
      }
    });
  
    socket.on("sendLocation", (coords, callback) => {
      const user = getUser(socket.id);
      io.to(user.room).emit("locationMessage", generateLocationMessage(user.username, `https://www.google.com/maps?q=${coords.latitude},${coords.longitude}`));
      callback();
    });
  
    socket.on("disconnect", () => {
      const user = removeUser(socket.id);
  
      if (user) {
        io.to(user.room).emit("message", generateMessage("Admin", `${user.username} has left!`));
        io.to(user.room).emit("roomData", {
          room: user.room,
          users: getUsersInRoom(user.room)
        });
      }
    });
  });
  

// config and use public (html and js)
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));



server.listen(process.env.PORT,() =>{
    console.log("App listen port: "+ process.env.PORT);
});