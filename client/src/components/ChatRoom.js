import React from "react";
import exit from "./x-square.svg";
import "./ChatRoom.css";

const ChatRoom = ({ room }) => {
  return (
    <div className="infoBar">
      <h3 className="glitch">
        <span aria-hidden="true">{room}</span>
        <span aria-hidden="true">{room}</span>
        <span aria-hidden="true">{room}</span>
      </h3>

      <div>
    
      </div>
      <div>
        <a href="/"><img src={exit} alt="" /></a>
      </div>
    </div>
  );
};

export default ChatRoom;
