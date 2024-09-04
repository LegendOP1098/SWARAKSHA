import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';

export function Chatbot(){
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== '') {
      sendMessageToChatbot(userInput);
      setUserInput('');
    }
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const sendMessageToChatbot = async (message) => {
    // Replace this with your actual chatbot API call
    const response = await fetch('https://your-chatbot-api.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    setMessages([...messages, { sender: 'user', text: userInput }, { sender: 'bot', text: data.response }]);
  };

  return (
      <>
      <Navbar/>
      <div className="bg-slate-800 h-[710px] flex flex-col-reverse">
            <ul className="">
            {messages.map((message, index) => (
            <li key={index} className={message.sender === 'user' ? 'user-message' : 'bot-message'}>
                  {message.text}
            </li>
            ))}
            </ul>
            <div className='flex justify-center my-5'>
            <input type="text" value={userInput} onChange={handleInputChange} placeholder="Type your message..."  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
            <button type="submit" class="mx-1 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Send</button>
            </div>
      </div></>
  );
};
