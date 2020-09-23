import React from "react";

import "./ChatRoom.css";

const ChatRoom = ({room}) => {
  return (
    <div>
      <div>
        <img alt="" />
        <h3>{room}</h3>
      </div>
      <div>
        <a href="/">
          exit
        </a>
      </div>
    </div>
  );
};

export default ChatRoom;
