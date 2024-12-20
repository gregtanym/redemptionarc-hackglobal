import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import ChatSources from "./ChatSources";
import React from "react";
import BlueRobot from "@/components/icons/BlueRobot";
interface ChatBubbleProps {
  isMe: boolean;
  content: string;
  username?: string;
  image_url?: string;
}

export const ChatBubble = ({
  isMe,
  content,
  username,
  image_url,
}: ChatBubbleProps) => {
  return (
    <div className="flex  w-full items-end ">
      {isMe ? null : (
        <Avatar className="my-2 ml-3">
          <AvatarImage src={image_url} />
          <AvatarFallback className="text-gray-800 ">
            {username?.charAt(0)}
          </AvatarFallback>
        </Avatar>
      )}

      <div
        className={`flex flex-col max-w-[60%] leading-1.5 p-4 my-2 border-gray-300 bg-white border-[1px] dark:bg-gray-700 ${
          isMe
            ? "rounded-s-xl rounded-se-xl ml-auto mr-2"
            : "rounded-e-xl rounded-ss-xl ml-2"
        }`}
        style={{
          wordBreak: "break-word",
          overflowWrap: "break-word",
          whiteSpace: "pre-wrap",
        }}
      >
        {username && !isMe && (
          <h1 className="text-sm">
            <em>{username}</em>
          </h1>
        )}
        <ReactMarkdown
          className="markdown-content"
          remarkPlugins={[remarkGfm]}
          components={{
            a: ChatSources,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};
