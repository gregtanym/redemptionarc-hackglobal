"use client";
import Chatbot from "@/components/Chatbot/components/Chatbot";
import { ChatBubble } from "@/components/Chatbot/components/chatbotComponents/ChatBubble";
import React, { useState } from "react";
import ChatPage from "./ChatPage";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MainHeader from "@/components/MainHeader";
import {
  ChatsCircle,
  UsersFour,
  UserPlus,
  PencilSimple,
  MagnifyingGlass,
  CaretRight,
} from "@phosphor-icons/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FriendsData from "../../../data/SampleFriendsOfLyf.json";
import { useGlobalContext } from "@/app/Context/store";
import UserChatData from "../../../data/UserChatData.json";
import ChannelData from "../../../data/ChannelData.json";

const Chat = () => {
  // create an array of chat objects
  const [selectedChatType, setSelectedChatType] = useState("channels");
  const { selectedUserId, setSelectedChatId } = useGlobalContext();
  const router = useRouter();

  const handleOnClick = (chatId) => {
    setSelectedChatId(chatId);

    router.push("/lyf-together/chat-page"); // navigate to '/lyf-together'
  };

  const userChats = UserChatData.find(
    (userChat) => userChat.userId === selectedUserId
  );
  console.log(userChats);

  return (
    <div className="w-full flex flex-col items-center">
      {/* <ChatPage chatArray={chats.chatArray} chatTitle={chats.chatTitle} /> */}
      <MainHeader>
        <div className="relative z-10 flex flex-col justify-around w-full px-3">
          <div className="text-white text-2xl flex items-center">
            <ChatsCircle className="mx-4" size={35} />
            <div className="font-semibold text-2xl">Chats & Channels</div>
          </div>
        </div>
      </MainHeader>
      <div className="w-5/6 flex flex-col items-center mt-4">
        <div className="w-full">
          <div className="flex items-center">
            <UsersFour size={32} />
            <span className="text-lg font-bold ml-2">Friends</span>
          </div>
          <div className="text-sm text-gray-500 mt-1">
            Add more friends to your friend list
          </div>
          <div className="mt-4">
            <Carousel>
              <CarouselContent>
                <CarouselItem className="basis-1/6">
                  <div className="bg-black rounded-full w-[60px] h-[60px] flex justify-center items-center">
                    <UserPlus color="white" size={32} />
                  </div>
                </CarouselItem>
                {FriendsData.map((friend, index) => (
                  <CarouselItem key={index} className="basis-1/6">
                    <Avatar className="w-[60px] h-[60px] overflow-hidden">
                      <AvatarImage
                        src={friend.img}
                        className="object-cover object-center w-full h-full"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        <div className="flex justify-between w-full mt-4">
          <div
            className={`rounded-full py-1.5 font-semibold px-3 text-sm cursor-pointer ${
              selectedChatType === "channels" ? "bg-black text-white" : "border"
            }`}
            onClick={() => setSelectedChatType("channels")}
          >
            Channels
          </div>
          <div
            className={`rounded-full py-1.5 font-semibold px-3 text-sm cursor-pointer ${
              selectedChatType === "groups" ? "bg-black text-white" : "border"
            }`}
            onClick={() => setSelectedChatType("groups")}
          >
            Groups
          </div>
          <div
            className={`rounded-full py-1.5 font-semibold px-3 text-sm cursor-pointer relative ${
              selectedChatType === "dm" ? "bg-black text-white" : "border"
            }`}
            onClick={() => setSelectedChatType("dm")}
          >
            Direct Messages
            <div
              className={`absolute -top-2 -right-2 h-5 w-5 rounded-full text-xs flex justify-center items-center ${
                selectedChatType === "dm"
                  ? "bg-white text-black border"
                  : "bg-black text-white"
              }`}
            >
              8
            </div>
          </div>
        </div>
        <div className="mt-4 w-full flex justify-between items-center ">
          <div className="w-4/5 py-3 px-4 bg-searchbar-white flex items-center rounded-xl flex-grow">
            <MagnifyingGlass size={25} className="mr-3" />
            <input
              type="text"
              placeholder="Search"
              className="flex-grow border-none outline-none bg-transparent p-0 m-0 focus:ring-0 placeholder-black"
            />
          </div>
          <PencilSimple size={30} className="ml-3" />
        </div>
        <div className="mt-4 w-full">
          {selectedChatType === "channels" &&
            ChannelData.map((chat, index) => {
              const lastMessage = chat.chatArray[chat.chatArray.length - 1]; // Get the last message

              return (
                <div
                  key={index}
                  className="w-full flex items-center mb-3 p-2 rounded-lg cursor-pointer"
                  onClick={() => handleOnClick(chat.chatId)}
                >
                  <img
                    src={chat.chatImg}
                    className="mr-3 w-10 h-10 rounded-full"
                    alt={`${chat.chatTitle} image`}
                  />
                  <div className="flex-1">
                    <div className="font-bold">{chat.chatTitle}</div>
                    {lastMessage && (
                      <div className="text-sm text-gray-600 truncate max-w-[200px]">
                        <span className="font-semibold">
                          {lastMessage.username}:
                        </span>{" "}
                        {lastMessage.content}
                      </div>
                    )}
                  </div>
                  {/* Wrapping CaretRight with flex-shrink-0 */}
                  <div className="flex-shrink-0 ml-2">
                    <CaretRight size={20} />
                  </div>
                </div>
              );
            })}

          {selectedChatType === "groups" &&
            userChats.chatDetails.map((chat, index) => {
              const lastMessage = chat.chatArray[chat.chatArray.length - 1]; // Get the last message

              return (
                <div
                  key={index}
                  className="w-full flex items-center mb-3 p-2 rounded-lg cursor-pointer"
                  onClick={() => handleOnClick(chat.chatId)}
                >
                  <img
                    src={chat.chatImg}
                    className="mr-3 w-10 h-10 rounded-full"
                    alt={`${chat.chatTitle} image`}
                  />
                  <div className="flex-1">
                    <div className="font-bold">{chat.chatTitle}</div>
                    {lastMessage && (
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold">
                          {lastMessage.username}:
                        </span>{" "}
                        {lastMessage.content}
                      </div>
                    )}
                  </div>
                  {/* Wrapping CaretRight with flex-shrink-0 */}
                  <div className="flex-shrink-0 ml-2">
                    <CaretRight size={20} />
                  </div>
                </div>
              );
            })}
          {selectedChatType === "dm" &&
            userChats.chatDetails.map((chat, index) => {
              const lastMessage = chat.chatArray[chat.chatArray.length - 1]; // Get the last message

              return (
                <div
                  key={index}
                  className="w-full flex items-center mb-3 p-2 rounded-lg cursor-pointer"
                  onClick={() => handleOnClick(chat.chatId)}
                >
                  <img
                    src={chat.chatImg}
                    className="mr-3 w-10 h-10 rounded-full"
                    alt={`${chat.chatTitle} image`}
                  />
                  <div className="flex-1">
                    <div className="font-bold">{chat.chatTitle}</div>
                    {lastMessage && (
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold">
                          {lastMessage.username}:
                        </span>{" "}
                        {lastMessage.content}
                      </div>
                    )}
                  </div>
                  {/* Wrapping CaretRight with flex-shrink-0 */}
                  <div className="flex-shrink-0 ml-2">
                    <CaretRight size={20} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="w-3/5 flex justify-center items-center rounded-full bg-black opacity-85 text-white py-3">
        Find new chats
      </div>
    </div>
  );
};

export default Chat;
