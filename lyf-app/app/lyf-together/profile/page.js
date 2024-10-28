"use client";
import React from "react";
import MainHeader from "@/components/MainHeader";
import { User } from "@phosphor-icons/react";
import { useGlobalContext } from "../../Context/store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UsersData from "../../../data/UsersData.json";
import BadgeData from "../../../data/BadgeData.json";
import {
  UserCircle,
  CaretRight,
  SignOut,
  Lock,
  EyeSlash,
  Headset,
  Heart,
} from "@phosphor-icons/react";

const Profile = () => {
  const { selectedUserId } = useGlobalContext();
  const user = UsersData.find((user) => user.userId === selectedUserId);

  console.log("this is the selected id: ", selectedUserId);
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <MainHeader>
        <div className="flex text-white relative z-10 items-center">
          <User size={35} className="mx-4" />
          <div className="font-semibold text-2xl">My Profile</div>
        </div>
      </MainHeader>
      <div className="w-5/6 mt-8 flex flex-col items-center">
        <Avatar className="w-[100px] h-[100px]">
          <AvatarImage src={user.profileImg} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="font-semibold">{user.userName}</div>
        <div className="text-sm">{user.bio}</div>
        <div className="flex flex-col items-start mt-3 w-full">
          <div className="font-semibold">Badges</div>
          <div className="flex mt-2">
            {user.badgeIds.map((badgeId, index) => {
              const myBadge = BadgeData.find((b) => b.id === badgeId);
              return (
                <img
                  key={index}
                  className="z-10 mr-4"
                  src={myBadge.badgeImg}
                ></img>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-start mt-3 w-full">
          <div className="font-semibold">Settings</div>
          <div className="w-full flex flex-col justify-start">
            {/* My account tab */}
            <div className="w-full flex items-center justify-between my-2 cursor-pointer hover:bg-black hover:opacity-85 p-4 group rounded-xl">
              <div className="flex items-center">
                <UserCircle
                  size={28}
                  className="text-gray-500 group-hover:text-white"
                />
                <div className="mx-3">
                  <div className="group-hover:text-white">My account</div>
                  <div className="text-xs text-gray-600 group-hover:text-white">
                    Personal Information
                  </div>
                </div>
              </div>
              <div>
                <CaretRight
                  size={24}
                  className="text-gray-500 group-hover:text-white"
                />
              </div>
            </div>
            {/* Privacy tab */}
            <div className="w-full flex items-center justify-between my-2 cursor-pointer hover:bg-black hover:opacity-85 p-4 group rounded-xl">
              <div className="flex items-center">
                <Lock
                  size={28}
                  className="text-gray-500 group-hover:text-white"
                />
                <div className="mx-3">
                  <div className="group-hover:text-white">Privacy</div>
                  <div className="text-xs text-gray-600 group-hover:text-white">
                    Keep your account public or private
                  </div>
                </div>
              </div>
              <div>
                <CaretRight
                  size={24}
                  className="text-gray-500 group-hover:text-white"
                />
              </div>
            </div>
            {/* Offline mode */}
            <div className="w-full flex items-center justify-between my-2 cursor-pointer hover:bg-black hover:opacity-85 p-4 group rounded-xl">
              <div className="flex items-center">
                <EyeSlash
                  size={28}
                  className="text-gray-500 group-hover:text-white"
                />
                <div className="mx-3">
                  <div className="group-hover:text-white">Offline Mode</div>
                  <div className="text-xs text-gray-600 group-hover:text-white">
                    Hide from people online
                  </div>
                </div>
              </div>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            {/* Log out */}
            <div className="w-full flex items-center justify-between my-2 cursor-pointer hover:bg-black hover:opacity-85 p-4 group rounded-xl">
              <div className="flex items-center">
                <SignOut
                  size={28}
                  className="text-gray-500 group-hover:text-white"
                />
                <div className="mx-3">
                  <div className="group-hover:text-white">Log out</div>
                </div>
              </div>
              <div>
                <CaretRight
                  size={24}
                  className="text-gray-500 group-hover:text-white"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start mt-3 w-full">
          <div className="font-semibold">More</div>
          <div className="w-full flex flex-col justify-start">
            {/* Help tab */}
            <div className="w-full flex items-center justify-between my-2 cursor-pointer hover:bg-black hover:opacity-85 p-4 group rounded-xl">
              <div className="flex items-center">
                <Headset
                  size={28}
                  className="text-gray-500 group-hover:text-white"
                />
                <div className="mx-3">
                  <div className="group-hover:text-white">Help & Support</div>
                </div>
              </div>
              <div>
                <CaretRight
                  size={24}
                  className="text-gray-500 group-hover:text-white"
                />
              </div>
            </div>
            {/* About App tab */}
            <div className="w-full flex items-center justify-between my-2 cursor-pointer hover:bg-black hover:opacity-85 p-4 group rounded-xl">
              <div className="flex items-center">
                <Heart
                  size={28}
                  className="text-gray-500 group-hover:text-white"
                />
                <div className="mx-3">
                  <div className="group-hover:text-white">About App</div>
                </div>
              </div>
              <div>
                <CaretRight
                  size={24}
                  className="text-gray-500 group-hover:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
