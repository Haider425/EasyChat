import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";

const ChatBox = () => {
  const messageEndRef = useRef();
  const [message, setMessages] = useState([]); 

  const scrollToBottom = () => {
    messageEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [message]);
  
  useEffect(() => {
    const q = query(collection(db, "messages"),
    orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({...doc.data(), id: doc.id});
      });
      setMessages(messages);
    });

    return () => unsubscribe();

  }, []);

  return (
    <div className="pb-44 pt-20 containerWrap">
      {message.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={messageEndRef}></div>
    </div>
  );
};

export default ChatBox;
