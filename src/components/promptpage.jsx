import React, { useState } from 'react';
import './promptpage.css'; 

const PromptPage = () => {
  const [prompt, setPrompt] = useState('');
  const [responses, setResponses] = useState([]); 

  // const handleSubmit = async (e) => { 
  //   e.preventDefault();
  //   if (prompt.trim()) {
  //     const userMessage = { type: 'user', content: prompt };
  //     setResponses((prevResponses) => [...prevResponses, userMessage]);
  //     setPrompt(''); 

  //     const responseContent = getResponse(prompt); 
  //     const aiMessage = { type: 'ai', content: responseContent };
  //     setResponses((prevResponses) => [...prevResponses, aiMessage]);
  //   }
  // };

  const getResponse = (prompt) => {
    switch (prompt.toLowerCase()) {
      case 'hello':
        return 'Hello! How can I help you today?';
      case 'what is basic things to know for coding':
        return `Here are some basic things to know for coding:
          1. Fundamental Concepts:
             - Variables: Containers that store data (like numbers, text, or true/false values).
             - Data Types: Different data types have different characteristics (e.g., integers, floats, strings, booleans).
             - Operators: Symbols that perform actions on data (e.g., arithmetic, comparison, logical).
             - Control Flow: How your code decides which parts to execute (e.g., conditional statements, loops).
             - Functions: Reusable blocks of code that perform a specific task.
          2. Choosing a Programming Language: Consider your interests (web development, mobile app development, game development, data science).
          3. Setting Up Your Environment: Text editor or IDE (e.g., VS Code, Sublime Text, PyCharm).
          4. Learning Resources: Online courses, tutorials, documentation, practice platforms.
          5. Key Skills: Problem-solving, logical thinking, persistence.
          6. Additional Tips: Start with small projects, join a coding community, practice regularly.`;
      case 'what is basic necessity for coding':
        return `The basic necessities for coding are:
          - A Computer or Device: With sufficient processing power.
          - Internet Access: For online resources, updates.
          - Text Editor or IDE: A program for writing and editing code (e.g., Notepad++, Sublime Text, Atom, VS Code, PyCharm, IntelliJ IDEA).
          - Choice of Programming Language: Select one that aligns with your goals (e.g., Python, JavaScript, C++, Java).`;
      default:
        return "I don't have a response for that prompt yet.";
    }
  };

  return (
    <div className="prompt-page">
      <header className="prompt-header">
        <h1>AI Prompt Interface</h1>
      </header>
      <div className="prompt-content">
        <main className="prompt-main">
          <div className="message-container">
            {responses.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                {message.content}
              </div>
            ))}
          </div>
          {/* <form onSubmit={handleSubmit} className="prompt-form"> */} 
          <form className="prompt-form"> {/* Remove onSubmit */}
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt here..."
              rows="4"
              className="prompt-input"
            />
            <button type="button" onClick={() => { 
              // Simulate button click and call getResponse
              const userMessage = { type: 'user', content: prompt };
              setResponses((prevResponses) => [...prevResponses, userMessage]);
              const responseContent = getResponse(prompt);
              const aiMessage = { type: 'ai', content: responseContent };
              setResponses((prevResponses) => [...prevResponses, aiMessage]);
              setPrompt(''); 
            }} className="submit-button"> 
              Send 
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default PromptPage;