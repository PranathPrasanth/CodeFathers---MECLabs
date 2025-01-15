import React, { useState } from 'react';
import './personalizedtext.css';

const questions = [
  { 
    id: 'background', 
    label: "What's your educational or professional background?",
    type: 'textarea'
  },
  { 
    id: 'goals', 
    label: "What are your primary learning or career goals?",
    type: 'textarea'
  },
  { 
    id: 'interests', 
    label: "What topics or skills are you most interested in developing?",
    type: 'textarea'
  },
  { 
    id: 'learning_style', 
    label: "How would you describe your preferred learning style?",
    type: 'radio',
    options: ['Visual', 'Auditory', 'Reading/Writing', 'Kinesthetic']
  },
  { 
    id: 'time_commitment', 
    label: "How much time can you commit to learning each week?",
    type: 'radio',
    options: ['1-2 hours', '3-5 hours', '6-10 hours', '10+ hours']
  },
  { 
    id: 'challenges', 
    label: "What are your biggest challenges or obstacles in learning?",
    type: 'textarea'
  },
  { 
    id: 'experience_level', 
    label: "How would you rate your current experience level in your primary area of interest?",
    type: 'radio',
    options: ['Beginner', 'Intermediate', 'Advanced', 'Expert']
  }
];

const personalizedtext = () => {
  const [activeTab, setActiveTab] = useState(questions[0].id);
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    alert('Questionnaire submitted successfully! Your personalized AI mentor session will be prepared.');
    setFormData({});
    setActiveTab(questions[0].id);
  };

  const goToNextTab = () => {
    const currentIndex = questions.findIndex((q) => q.id === activeTab);
    if (currentIndex < questions.length - 1) {
      setActiveTab(questions[currentIndex + 1].id);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mentor-ai-questionnaire">
      <h2>AI Mentor Personalization Questionnaire</h2>
      <div className="tabs">
        {questions.map((q, index) => (
          <button
            key={q.id}
            type="button"
            className={`tab ${activeTab === q.id ? 'active' : ''}`}
            onClick={() => setActiveTab(q.id)}
          >
            Q{index + 1}
          </button>
        ))}
      </div>
      {questions.map((q) => (
        <div key={q.id} className={`tab-content ${activeTab === q.id ? 'active' : ''}`}>
          <label htmlFor={q.id}>{q.label}</label>
          {q.type === 'textarea' ? (
            <textarea
              id={q.id}
              name={q.id}
              value={formData[q.id] || ''}
              onChange={handleInputChange}
              rows={4}
            />
          ) : q.type === 'radio' ? (
            <div className="radio-group">
              {q.options.map((option) => (
                <div key={option} className="radio-option">
                  <input
                    type="radio"
                    id={`${q.id}-${option}`}
                    name={q.id}
                    value={option}
                    checked={formData[q.id] === option}
                    onChange={() => handleRadioChange(q.id, option)}
                  />
                  <label htmlFor={`${q.id}-${option}`}>{option}</label>
                </div>
              ))}
            </div>
          ) : (
            <input
              type="text"
              id={q.id}
              name={q.id}
              value={formData[q.id] || ''}
              onChange={handleInputChange}
            />
          )}
        </div>
      ))}
      <div className="button-group">
        <button
          type="button"
          onClick={goToNextTab}
          disabled={activeTab === questions[questions.length - 1].id}
          className="next-button"
        >
          Next
        </button>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </form>
  );
};

export default personalizedtext;
