import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import ChatRoom from "./ChatRoom";
import Input from "./Input";
import Messages from "./Messages";
import "./Chat.css";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "https://chatroom-app1.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
   
  }, [ENDPOINT, window.location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
  console.log(message, messages);
  return (
    <div className="chatContainer">
      <div>
        <ChatRoom room={room} />
        <div className="chatBox">
        <Messages messages={messages} name={name} />
      </div>
      </div>
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
    </div>
  );
};
export default Chat;
