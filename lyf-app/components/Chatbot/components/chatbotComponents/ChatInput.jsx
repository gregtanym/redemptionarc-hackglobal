import React, { useState } from "react";
import SearchIcon from "@/components/icons/SearchIcon";
import { Mic } from "lucide-react";
import AudioRecorder from "./AudioRecorder";
const ChatInput = ({ sendButtonPressed, isNextChatLoading, className }) => {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={`${className} relative max-w-[351px] `}>
      <div className="px-[15px] pb-[20px]">
        <div className=" w-[100%] drop-shadow-lg h-fit flex items-center border-gray-300 border-[1px] rounded-xl bg-white">
          <input
            name="message"
            value={input}
            onChange={handleInputChange}
            placeholder="Ask me anything..."
            className="text-black resize-none px-4 max-h-[40vh] grow border-none rounded-xl focus:outline-none border-transparent focus:ring-0 overflow-x-hidden"
          />
          <button size="icon" variant="secondary">
            <div className="p-2 text-black">
              <Mic className="h-5 w-5" />
            </div>
          </button>
          <button
            size="icon"
            variant="secondary"
            disabled={isNextChatLoading}
            onClick={() => {
              sendButtonPressed(input);
              setInput("");
            }}
          >
            <div className="pr-2 flex">
              <SearchIcon
                className="mt-[2px] h-5 w-5 "
                colour={isNextChatLoading ? "#808080" : "#171924"}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
