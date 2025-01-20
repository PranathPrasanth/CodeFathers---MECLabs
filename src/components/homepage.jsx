import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaCode, FaRocket, FaBolt, FaBars, FaTimes } from 'react-icons/fa';
import './HomePage.css';
import { FaPen } from 'react-icons/fa6';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="home-page">
      <header>
        <div className="container">
          <div className="logo">
            <FaBrain className="logo-icon" />
            <span>ElevAIte</span>
          </div>
          <nav className={isMenuOpen ? 'open' : ''}>
            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <ul>
              <li><a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Sign Up</a></li>
              <li><a href="/login" onClick={() => setIsMenuOpen(false)}>Log In</a></li>
            </ul>
          </nav>
          
                  </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <motion.h1 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Your Personal AI Mentor
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Accelerate your learning journey with personalized AI-powered mentorship
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="/login" className="cta-button">Get Started</a>
            </motion.div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <h2>Why Choose AI Mentor?</h2>
            <div className="feature-grid">
              <FeatureCard 
                icon={<FaBolt />} 
                title="Instant Answers" 
                description="Get immediate responses to your questions, anytime." 
              />
              <FeatureCard 
                icon={<FaPen />} 
                title="Personalized Support" 
                description="Receive help with coding challenges and debugging." 
              />
              <FeatureCard 
                icon={<FaBrain />} 
                title="Personalized Learning" 
                description="Tailored guidance based on your learning style and goals." 
              />
              <FeatureCard 
                icon={<FaRocket />} 
                title="Career Growth" 
                description="Accelerate your career with expert advice and resources." 
              />
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <div className="about-content">
              <div className="about-image">
                <img src="/placeholder.svg?height=400&width=600" alt="AI Mentor Dashboard" />
              </div>
              <div className="about-text">
                <h2>Experience the Future of Learning</h2>
                <p>
                  Our AI-powered platform adapts to your learning style, providing personalized lessons, 
                  instant feedback, and continuous support to help you achieve your goals faster than ever before.
                </p>
                <ul>
                  <li><FaBolt /> 24/7 access to AI mentorship</li>
                  <li><FaBolt /> Customized learning paths</li>
                  <li><FaBolt /> Real-time progress tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="pricing" className="pricing">
          <div className="container">
            <h2>Choose Your Plan</h2>
            <div className="pricing-grid">
              <PricingCard 
                title="Basic" 
                price="$9.99" 
                features={['Daily AI consultations', 'Basic learning resources', 'Email support']} 
              />
              <PricingCard 
                title="Pro" 
                price="$19.99" 
                features={['Unlimited AI consultations', 'Advanced learning resources', 'Priority support', 'Progress tracking']} 
                highlighted={true} 
              />
              <PricingCard 
                title="Enterprise" 
                price="Custom" 
                features={['Custom AI model', 'Dedicated account manager', '24/7 phone support', 'Team collaboration tools']} 
              />
            </div>
          </div>
        </section> */}

        <section id="contact" className="contact">
          <div className="container">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join thousands of learners who have accelerated their growth with AI Mentor.</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>AI Mentor</h3>
              <p>Empowering learners worldwide with AI-driven mentorship.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect With Us</h4>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 AI Mentor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    className="feature-card"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className="feature-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);

const PricingCard = ({ title, price, features, highlighted = false }) => (
  <div className={`pricing-card ${highlighted ? 'highlighted' : ''}`}>
    <h3>{title}</h3>
    <p className="price">{price}<span>/month</span></p>
    <ul>
      {features.map((feature, index) => (
        <li key={index}><FaBolt /> {feature}</li>
      ))}
    </ul>
    <button>Choose Plan</button>
  </div>
);

export default HomePage;

