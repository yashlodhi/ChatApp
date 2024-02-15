import { io } from "socket.io-client";
import { useState, useEffect } from "react";

function App() {
  const [socketId, setSocketId] = useState(0);
  
  useEffect(() => {
      const socket = io("http://localhost:8000");
      socket.on("connect", () => {
        console.log("connected", socket.id);
        setSocketId(socket.id);
      });
      return () => {
        socket.disconnect();
      };

  }, []);

  return (
    <>
      <div id="container">
        <div id="available_people_section">

        </div>
        <div id="msg_window">

        </div>
      </div>
    </>
  );
}

export default App;
