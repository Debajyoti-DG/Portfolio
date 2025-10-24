import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    // State to hold the conversation messages
    const [messages, setMessages] = useState([
        {
            text: "Hello! I'm Debajyoti's AI assistant. You can ask me about his skills, experience, or even general tech questions. How can I help you today?",
            sender: 'bot'
        }
    ]);

    // State for the user's input
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    // Ref to automatically scroll to the latest message
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    
    // The "brain" of the chatbot
    const getBotResponse = (userInput) => {
        const input = userInput.toLowerCase();

        // Greetings & Basic Interaction
        if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
            return "Hello there! I'm ready to help. What would you like to know about Debajyoti or his work?";
        }
        if (input.includes('how are you') || input.includes('who are you') || input.includes('about you') || input.includes('tell me about debajyoti')) {
            return "I'm a digital version of Debajyoti Datta Gupta, a passionate Computer Science student and full-stack developer. He designed me to answer questions about his skills, projects, and goals. He's focused on building impactful, user-centric applications by merging AI and full-stack development.";
        }
        if (input.includes('thank you') || input.includes('thanks')) {
            return "You're welcome! Is there anything else I can help you with?";
        }

        // Professional Background
        if (input.includes('skills') || input.includes('tech stack') || input.includes('technologies')) {
            return "Debajyoti is proficient across the full stack. His expertise includes:\n• React.js, Node.js, & Express\n• Java, Python\n• SQL & MongoDB\n• Bootstrap 5 & AI integration.\nHe's always learning and expanding his toolkit.";
        }
        if (input.includes('experience') || input.includes('work')) {
            return "He worked as a Full Stack Developer Intern at Skillence, where he designed and developed their primary platform. He also has over four years of experience mentoring students in Java and SQL, helping them build a strong foundation in programming.";
        }
        if (input.includes('education') || input.includes('college')) {
            return "Debajyoti is pursuing his Bachelor of Technology in Computer Science and Engineering from the Future Institute of Engineering and Management, Kolkata.";
        }
        if (input.includes('hackathon') || input.includes('achievements')) {
            return "He was a finalist at the Smart India Hackathon 2024, where his team developed an innovative tech solution under government mentorship. It was a fantastic experience in high-pressure problem-solving.";
        }
        if (input.includes('goals') || input.includes('ambition')) {
            return "His primary goal is to become an AI-driven Software Engineer. He aims to merge creative full-stack development with intelligent AI systems to build applications that are not just functional, but also smart and impactful.";
        }
        if (input.includes('love') || input.includes('marry')) {
            return "He is committed to his work and passionate about technology! 😉";
        }

        // Website Navigation & Contact
        if (input.includes('links') || input.includes('navigate') || input.includes('sections')) {
            return `Of course. You can visit any of these sections:<br/>
                <a href='#home'>Home</a> • 
                <a href='#about'>About</a> • 
                <a href='#experience'>Experience</a> • 
                <a href='#hobbies'>Hobbies</a> • 
                <a href='#certifications'>Certifications</a> • 
                <a href='#projects'>Projects</a> • 
                <a href='#skills'>Skills</a> • 
                <a href='#hire-me'>Hire Me</a>`;
        }
        if (input.includes('contact') || input.includes('hire')) {
            return "He's always open to new opportunities and collaborations! The best way to get in touch is through the <a href='#hire-me'>Hire Me</a> section, which has his contact details.";
        }

        // Technical Questions
        if (input.includes('what is react')) {
            return "React.js is a JavaScript library for building user interfaces, especially for single-page applications. It lets you build complex UIs from small, isolated pieces of code called 'components.' This chatbot window itself is a great example of a React component!";
        }
        if (input.includes('what is node.js')) {
            return "Node.js is a runtime environment that allows you to run JavaScript on the server side. It's perfect for building fast and scalable backend APIs. For example, the server that would process this chat's data could be built with Node.js and Express.";
        }

        // Fallback response
        return "That's a great question. I'm not equipped to answer that specifically, but I'm sure Debajyoti would love to discuss it. You can find his contact information on the 'Hire-Me' page.";
    };

    // Function to handle sending a message
    const handleSendMessage = () => {
        if (inputValue.trim() === '') return;

        const userMessage = { text: inputValue, sender: 'user' };
        setMessages(prevMessages => [...prevMessages, userMessage]);
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            const botResponse = getBotResponse(inputValue);
            const botMessage = { text: botResponse, sender: 'bot' };
            setMessages(prevMessages => [...prevMessages, botMessage]);
            setIsTyping(false);
        }, 1200);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="chatbot-window">
            <div className="chatbot-header">
                Debajyoti's Assistant
            </div>
            <div className="chatbot-body">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.sender}`}>
                        {/* Use dangerouslySetInnerHTML to render HTML links */}
                        <p dangerouslySetInnerHTML={{ __html: msg.text }}></p>
                    </div>
                ))}
                {isTyping && (
                     <div className="chat-message bot typing">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="chatbot-footer">
                <input
                    type="text"
                    placeholder="Ask me anything..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;