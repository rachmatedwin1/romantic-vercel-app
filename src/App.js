import React, { useState } from "react";
import "./App.css";

const romanticMessages = [
  "You are the reason I smile every day.",
  "My heart beats for you.",
  "You are my today and all of my tomorrows.",
  "Every moment with you is a treasure.",
  "Love you more than words can say.",
];

function App() {
  const [message, setMessage] = useState(romanticMessages[0]);
  const randomMessage = () => {
    const random = romanticMessages[Math.floor(Math.random() * romanticMessages.length)];
    setMessage(random);
  };

  return (
    <div className="container">
      <h1 className="title">💕 Romantic Messages</h1>
      <div className="messageBox">{message}</div>
      <button onClick={randomMessage} className="button">
        Show Another
      </button>
    </div>
  );
}

export default App;
