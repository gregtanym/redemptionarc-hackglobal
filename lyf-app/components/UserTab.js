import React from "react";
import { UserCircle, CaretRight } from "@phosphor-icons/react";
import { useGlobalContext } from "@/app/Context/store";
import { useRouter } from "next/navigation"; // Import useRouter

const UserTab = ({ userId, userName }) => {
  const { setSelectedUserId } = useGlobalContext();
  const router = useRouter();
  const handleOnClick = () => {
    console.log(userId);
    setSelectedUserId(userId);
    router.push("/lyf-together"); // navigate to '/lyf-together'
  };
  return (
    <div
      className="w-4/5 flex items-center justify-between my-2 cursor-pointer"
      onClick={handleOnClick}
    >
      <div className="flex items-center">
        <UserCircle size={32} />
        <div className="text-lg mx-2">{userName}</div>
      </div>
      <div>
        <CaretRight size={28} />
      </div>
    </div>
  );
};

export default UserTab;
