import { useState } from "react";
import styles from "../styles/Home.module.css";

const romanticMessages = [
  "You are the reason I smile every day.",
  "My heart beats for you.",
  "You are my today and all of my tomorrows.",
  "Every moment with you is a treasure.",
  "Love you more than words can say.",
];

export default function Home() {
  const [message, setMessage] = useState(romanticMessages[0]);
  const randomMessage = () => {
    const random = romanticMessages[Math.floor(Math.random() * romanticMessages.length)];
    setMessage(random);
  };

  return (
    <div className={styles.container}>
      <h1>💕 Romantic Messages</h1>
      <div className={styles.messageBox}>{message}</div>
      <button onClick={randomMessage} className={styles.button}>
        Show Another
      </button>
    </div>
  );
}
