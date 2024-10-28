"use client";

import { ChatBubble } from "@/components/Chatbot/components/chatbotComponents/ChatBubble";
import ChatInput from "@/components/Chatbot/components/chatbotComponents/ChatInput";
import { ArrowLeft } from "lucide-react";
import React from "react";

const ChatPage = ({ chatArray, chatTitle, sendButtonPressed }) => {
  return (
    <div className="flex flex-col justify-between h-[calc(100vh-100px)] overflow-hidden">
      <div className="p-6 flex justify-start gap-2 items-center border-b-2 border-gray-300">
        <ArrowLeft />
        <h1>{chatTitle}</h1>
      </div>

      <div className="flex-grow overflow-y-auto">
        {chatArray.map((chat) => {
          return (
            <ChatBubble
              isMe={chat.isMe}
              content={chat.content}
              username={chat.username}
              image_url={chat.image_url}
            />
          );
        })}
      </div>
      <ChatInput
        isNextChatLoading={false}
        sendButtonPressed={false}
        className="max-w-full"
      />
    </div>
  );
};

export default ChatPage;
