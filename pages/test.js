import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiSend } from 'react-icons/fi';
import styles from '../styles/ChatApp.module.css';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    addBotMessage('Hello! How can I assist you today?');
  }, []);

  const addMessage = (text, isUser = false) => {
    const newMessage = { text, isUser };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const addBotMessage = async (userInput) => {
    addMessage(userInput, true);

    try {
      const response = await axios.post('/api/chat', { message: userInput });
      const botResponse = response.data.message;

      addMessage(botResponse, false);
    } catch (error) {
      console.log('Error:', error);
      addMessage("Sorry, I couldn't process your request.", false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() === '') return;

    addBotMessage(inputText);
    setInputText('');
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={styles.chatApp}>
      <div className={`${styles.sidebar} ${isNavOpen ? styles.active : ''}`}>
        <nav className={styles.navbar}>
          <button className={styles.navbarToggler} onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`${styles.navbarCollapse} ${isNavOpen ? styles.show : ''}`}>
            <ul className={styles.navbarNav}>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="#home">
                  Logo
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="#about">
                  
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="#contact">
                  
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className={styles.chatContainer}>
        <div className={styles.chatMessages}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${styles.message} ${message.isUser ? styles.user : styles.bot}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className={styles.chatForm}>
  <div className={styles.inputContainer}>
    <input
      type="text"
      placeholder="Type a message..."
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      className={styles.inputField}
    />
    <button type="submit" className={styles.sendButton}>
      <FiSend className={styles.sendIcon} />
    </button>
  </div>
</form>

      </div>
    </div>
  );
};

export default ChatApp;