"use client";

import { ChatBubble } from "@/components/Chatbot/components/chatbotComponents/ChatBubble";
import ChatInput from "@/components/Chatbot/components/chatbotComponents/ChatInput";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { useGlobalContext } from "@/app/Context/store";
import UserChatData from "../../../data/UserChatData.json";
import Link from "next/link";

const ChatPage = () => {
  const { selectedChatId } = useGlobalContext();
  const chat = UserChatData.flatMap((user) => user.chatDetails).find(
    (chat) => chat.chatId === selectedChatId
  );
  console.log(chat);
  return (
    <div className="flex flex-col justify-between h-[calc(100vh-100px)] overflow-hidden">
      <div className="p-6 flex justify-start gap-2 items-center border-b-2 border-gray-300">
        <Link href="/lyf-together/chat">
          <ArrowLeft />
        </Link>
        <h1>{chat.chatTitle}</h1>
      </div>

      <div className="flex-grow overflow-y-auto mt-3">
        {chat.chatArray.map((chat, index) => {
          return (
            <ChatBubble
              key={index}
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
        className="max-w-3/5"
      />
    </div>
  );
};

export default ChatPage;
