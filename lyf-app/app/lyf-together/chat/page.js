import Chatbot from "@/components/Chatbot/components/Chatbot";
import { ChatBubble } from "@/components/Chatbot/components/chatbotComponents/ChatBubble";
import React from "react";
import ChatPage from "./ChatPage";

const Chat = () => {
  // create an array of chat objects

  const chats = {
    chatTitle: "The solo travellers!",
    chatArray: [
      {
        isMe: true,
        content: "Hello",
        username: "John Doe",
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png",
      },
      {
        isMe: false,
        content: "Hello",
        username: "Jane Doe",
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png",
      },
      {
        isMe: true,
        content: "Hello",
        username: "John Doe",
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Imagfdsafe_created_with_a_mobile_phone.png",
      },
      {
        isMe: false,
        content: "Hello",
        username: "Ur mother",
        image_url: "https://via.placeholder.com/150",
      },
    ],
  };

  return (
    <div>
      <ChatPage chatArray={chats.chatArray} chatTitle={chats.chatTitle} />
    </div>
  );
};

export default Chat;
