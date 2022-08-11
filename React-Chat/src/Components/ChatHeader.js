import React from "react";
import { username } from "../App";

function ChatHeader() {
  return (
    <div className="header">
      <div className="profile-pic"> </div>

      <div className="chat-title">
        <h1 className="user-name">{username}</h1>
        <h2 className="id">שכחתי את המספר האישי שלך</h2>
      </div>
    </div>
  );
}

export default ChatHeader;
