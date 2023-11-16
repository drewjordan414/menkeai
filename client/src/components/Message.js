import React from 'react';

function Message({ text, sender }) {
  const messageClass = sender === 'user' ? 'message user-message' : 'message ai-message';

  return (
    <div className={messageClass}>
      {text}
    </div>
  );
}

export default Message;
