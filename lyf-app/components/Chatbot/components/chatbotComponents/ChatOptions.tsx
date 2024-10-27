import React from "react";
import { v4 as uuidv4 } from "uuid";

const ChatOptions = ({ options, sendButtonPressed }) => {
  const { length } = options;
  return (
    <div>
      {options.map((option) => {
        return (
          <div className=" text-left flex items-center gap-5 bg-[#F6F6F6] rounded-xl p-4 mb-4">
            <img src={option.iconPath} alt={option.text} />
            <p className="text-sm">{option.text}</p>
          </div>
        );
      })}
    </div>

    // <div
    //   className="flex justify-between space-x-3 transition animate-fade-in-down mt-2"
    //   key={options.join("-")}
    // >
    //   {options.map((option) => (
    //     <button
    //       style={{
    //         wordBreak: "break-word",
    //         overflowWrap: "break-word",
    //         whiteSpace: "pre-wrap",
    //       }}
    //       type="button"
    //       key={uuidv4()}
    //       onClick={() => sendButtonPressed(option)}
    //       className={`w-[150px] basis-1/${length} text-center rounded-xl leading-1.5 p-4 my-2 border-gray-300  hover:opacity-80 bg-white border-[1px] dark:bg-gray-700`}
    //     >
    //       {option.text}
    //     </button>
    //   ))}
    // </div>
  );
};

export default ChatOptions;
