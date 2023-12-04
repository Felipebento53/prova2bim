import React from 'react';
import Menu from './Menu';
import './Chat.css';

export default function TelaChat(props) {
  return (
    <div>
    <Menu/>
        <div className="chat-container">
      <div className="chat-messages">
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Digite sua mensagem..." />
        <button>Enviar</button>
      </div>
    </div>
    </div>
    
  );
};

