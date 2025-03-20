import React, { useEffect, useRef } from "react";
import Message from "./Message";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages()
  console.log("message", messages);
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
    }, 100);
  },[messages])
  return (
    <div className="px-4 flex-1 overflow-auto">

      {!loading && messages.length > 0 && messages.map((m) => (
        <div key={m._id} ref={lastMessageRef}>
          <Message  message={m} />
        </div>
      ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}



      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-200">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
