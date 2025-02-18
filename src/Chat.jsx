import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";

// Kết nối với Socket.IO
const socket = io("http://localhost:8080");

const Chat = ({ userId, chatWith }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch old messages when component mounts
    const fetchOldMessages = async () => {
      try {
        // Use template literals to construct the URL
        const response = await axios.get(
          `http://localhost:8080/${userId}/${chatWith}`
        );
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching old messages", error);
      }
    };

    fetchOldMessages();

    // Lắng nghe sự kiện 'receiveMessage'
    socket.on("receiveMessage", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    // Clean up khi component unmount
    return () => {
      socket.off("receiveMessage");
    };
  }, [userId, chatWith]);

  const sendMessage = () => {
    if (message.trim() === "") return; // Kiểm tra tin nhắn rỗng

    const newMessage = {
      sender: userId,
      receiver: chatWith,
      content: message,
      timestamp: new Date().toISOString(),
    };
    socket.emit("sendMessage", newMessage);
    setMessage("");
  };

  return (
    <div>
      <div
        style={{
          maxHeight: "300px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          marginBottom: "10px",
          padding: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}</strong>: {msg.content}{" "}
            <em>({new Date(msg.timestamp).toLocaleTimeString()})</em>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
        style={{ width: "80%", padding: "10px", marginRight: "10px" }}
      />
      <button onClick={sendMessage} style={{ padding: "10px" }}>
        Send
      </button>
    </div>
  );
};

export default Chat;
