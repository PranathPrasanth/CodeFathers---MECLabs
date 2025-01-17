import React, { useState } from 'react';
import './promptpage.css';

const promptpage = () => {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([]);
  const [promptHistory, setPromptHistory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      const newMessage = { type: 'user', content: prompt };
      setMessages([...messages, newMessage]);
      setPromptHistory([...promptHistory, prompt]);
      // Here you would typically send the prompt to your AI service
      // and then add the response to the messages
      setPrompt('');
    }
  };

  const handleHistoryClick = (oldPrompt) => {
    setPrompt(oldPrompt);
  };

  return (
    <div className="prompt-page">
      <header className="prompt-header">
        <h1>AI Prompt Interface</h1>
      </header>
      <div className="prompt-content">
        <aside className="prompt-history">
          <h2>Prompt History</h2>
          <ul>
            {promptHistory.map((oldPrompt, index) => (
              <li key={index} onClick={() => handleHistoryClick(oldPrompt)}>
                {oldPrompt.length > 30 ? oldPrompt.substring(0, 30) + '...' : oldPrompt}
              </li>
            ))}
          </ul>
        </aside>
        <main className="prompt-main">
          <div className="message-container">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                {message.content}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="prompt-form">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt here..."
              rows="4"
              className="prompt-input"
            />
            <button type="submit" className="submit-button">
              Send
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default promptpage;

