import React, { useState, useEffect } from 'react';
import ReactBootstrap from 'react-bootstrap';
import MDBReact from 'mdbreact';
import ChatInput from './components/ChatInput';
import MessageList from './components/MessageList';
import Header from './components/Header';
import apiService from './components/Api';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Load chat history from local storage when the app loads
    const storedMessages = JSON.parse(localStorage.getItem('chatHistory'));
    if (storedMessages) {
      setMessages(storedMessages);
    }
  }, []);

  const handleSendMessage = async (userInput) => {
    // Existing logic to send message and get AI response
    const aiResponse = await apiService.getAIResponse(userInput);

    // Update messages and save to local storage
    const updatedMessages = [
      ...messages, 
      { text: userInput, sender: 'user' },
      { text: aiResponse, sender: 'ai' }
    ];
    setMessages(updatedMessages);
    localStorage.setItem('chatHistory', JSON.stringify(updatedMessages));
  };

  const clearHistory = () => {
    localStorage.removeItem('chatHistory');
    setMessages([]);
  };

  return (
    <div className="App">
      <Header />
      <MessageList messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
      <button onClick={clearHistory} className="clear-history-button">
        Clear History
      </button>
    </div>
  );
}

export default App;
