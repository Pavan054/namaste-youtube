import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const [liveMessage, setLiveMessage] = useState("");
    const chatMessages = useSelector(store => store.chat.messages);

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(addMessage({
                name: generateRandomName(),
                message: generateRandomMessage(25),
            }));
            
        }, 1500);
        return () => clearInterval(timer);
    },[]);

  return (
    <>
        <div className="ml-2 w-full border border-black rounded-t-lg bg-gray-200 font-bold text-center">Live Chat</div>
        <div className="py-2 ml-2 h-[530px] w-full border border-black bg-slate-100 overflow-y-scroll flex flex-col-reverse">
            {
                chatMessages.map((c, i) => <ChatMessage key={i} name={c.name} message={c.message} /> )
            }
        </div>
        <form className="w-full p-2 ml-2 border border-black rounded-b-lg text-center" 
        onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessage({
                name: "Pavan Kumar",
                message: liveMessage,
            }));
            setLiveMessage("");
            }}>
            <input className="px-2 w-64 border border-blue-200" type="text" value={liveMessage} onChange={e => setLiveMessage(e.target.value)} placeholder="Jot something down!"/>
            <button className="px-2 mx-2 bg-green-100">Send</button>
        </form>
    </>
  )
}

export default LiveChat
