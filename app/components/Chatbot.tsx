// components/Chatbot.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Define the types for our message objects
type Sender = 'user' | 'ai';

interface Message {
  text: string;
  sender: Sender;
}

export default function Chatbot() {
  // Use a state variable to control visibility, initially set to true (open)
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi, I am Abdul's AI Assistant. How can I help you?", sender: 'ai' }
  ]);
  const [input, setInput] = useState<string>('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage, { text: '', sender: 'ai' }]);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: input }),
      });

      if (!response.body) {
        throw new Error('No response body');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedText = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        accumulatedText += decoder.decode(value, { stream: true });
        
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { text: accumulatedText, sender: 'ai' };
          return newMessages;
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 p-4 z-[9999] font-sans">
      {/* The main chat window, rendered conditionally */}
      {isOpen && (
        <div className="flex flex-col h-[70vh] w-[20vw] max-w-lg border rounded-lg shadow-lg p-4 bg-white dark:bg-slate-800">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">AI Assistant</h3>
            <Button
              variant="ghost"
              className="text-blue-800 hover:text-red-500 text-2xl p-2"
              onClick={() => setIsOpen(false)}
            >
              &times; {/* This is a simple 'x' for closing */}
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-2 rounded-lg max-w-[70%] ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleSend} className="flex mt-4 space-x-2">
            <Input
              value={input}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
              placeholder="Ask me a question..."
            />
            <Button type="submit">Send</Button>
          </form>
        </div>
      )}

      {/* The floating button that appears when the chat is closed */}
     {/* The floating button that appears when the chat is closed */}
      {!isOpen && (
        <Button
          className="rounded-full w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
          onClick={() => setIsOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9.5 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-1c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm4-1c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"/>
          </svg>
        </Button>
      )}
    
    </div>
  );
}