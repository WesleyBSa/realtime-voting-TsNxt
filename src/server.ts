import http from "http";
import { Server } from "socket.io";
import app from "./app"; 

const server = http.createServer(app); 
const io = new Server(server, {
  cors: { origin: "*" }, 
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("vote", (poll) => {
    io.emit("update", poll); 
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
