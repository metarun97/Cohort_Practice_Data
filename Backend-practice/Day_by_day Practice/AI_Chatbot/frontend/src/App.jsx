// ...existing code...
import { useState, useRef, useEffect } from 'react';
import './App.css';
import { io } from 'socket.io-client';

export default function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const endRef = useRef(null);
  const [socket, setSocket] = useState(null);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg = {
      id: Date.now(),
      text,
      sender: 'user',
      ts: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMsg]);

    socket.emit('ai-message', input);
    setInput('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const socketInstance = io('http://localhost:3000');
    setSocket(socketInstance);

    socketInstance.on('ai-message-response', (response) => {
      const botMessage = {
        id: Date.now() + 1,
        text: response,
        ts: new Date().toISOString(),
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMessage]);
    });
  }, []);

  return (
    <div className="chat-app">
      <header className="chat-header">Chat</header>

      <main className="chat-window">
        {messages.length === 0 && (
          <div className="chat-empty">No messages yet. Say hello 👋</div>
        )}
        {messages.map((m) => (
          <div key={m.id} className={`bubble ${m.sender}`}>
            <div className="bubble-text">{m.text}</div>
            <div className="bubble-ts">
              {new Date(m.ts).toLocaleTimeString()}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </main>

      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Type a message..."
          aria-label="Message input"
        />
        <button onClick={sendMessage} aria-label="Send">
          Send
        </button>
      </div>
    </div>
  );
}
// ...existing code...
