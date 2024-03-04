import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connect", (socket) => {
  console.log("client connected");

  socket.on("getStatus", (data) => {
    socket.broadcast.emit("gameStatus",data)
  });
});
const port = 3000;
server.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${3000}`);
});
