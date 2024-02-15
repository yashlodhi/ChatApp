import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
const PORT = 8000;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on('connection', (socket) => {
    console.log("New Socket : ", socket.id);
});

app.use( cors({ origin: "http://localhost:3000", method: ["GET", "POST"] }) )

httpServer.listen(PORT, () => console.log('Server is listening on port number 8000.'));