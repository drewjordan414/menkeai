import React, { useState } from 'react';
import ChatInput from './components/ChatInput';
import MessageList from './components/MessageList';
import Header from './components/Header';
import apiService from './components/Api';

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (userInput) => {
    // Add user message to the conversation
    setMessages(messages => [...messages, { text: userInput, sender: 'user' }]);
    
    // Get AI response
    const aiResponse = await apiService.getAIResponse(userInput);
    setMessages(messages => [...messages, { text: aiResponse, sender: 'ai' }]);
  };

  return (
    <div className="App">
      <Header />
      <MessageList messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
