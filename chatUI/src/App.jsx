import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Chats({chatLines}) {
    console.log(chatLines)
    if (!chatLines) return null;
    return (
        <div>
            {chatLines.map(chat => <p key={chat}>{chat}</p>)}
        </div>
    );
}

function App() {
  const [chat, setChat] = useState("");
  const [chats, setChats] = useState(Array(0));

  function handleKeyDown(e) {
      if (e.key === 'Enter') {
          const newChats = chats.slice();
          newChats.push(chat);
          setChats(newChats);
          e.target.value = '';
      }
  }

  return (
    <>
        <div>
            <Chats chatLines={chats} />
        </div>

        <label>
            CHAT! { ' ' }
            <input name="test" onKeyDown={handleKeyDown} onChange={e=> setChat(e.target.value) }/>
        </label>

    </>
  )
}

export default App
