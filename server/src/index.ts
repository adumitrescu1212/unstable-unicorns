import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { testMotor } from './joc.js';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

app.get("/health", (_request, response) => {
  response.json({ status: "ok" });
});

io.on("connection", (socket) => {
  socket.emit("hello", "Hello from unstable-unicorns server");
});

httpServer.listen(3001, () => {
  console.info("unstable-unicorns server listening on port 3001");

  // 🧪 Testăm motorul jocului o singură dată, la pornire
  testMotor();
});