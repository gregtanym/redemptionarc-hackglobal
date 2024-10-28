"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera } from "@phosphor-icons/react";
import UsersData from "../../data/UsersData.json";
import Link from "next/link";

const NewUser = () => {
  const user = UsersData.find((user) => user.userId === 3);
  console.log(user);
  const [isPublicProfile, setIsPublicProfile] = useState(true);
  const [isSoloTraveller, setIsSoloTraveller] = useState(true);
  const [termsAccepted, setTermsAccepted] = useState(true);

  const handleTogglePublicProfile = () => setIsPublicProfile(!isPublicProfile);
  const handleToggleSoloTraveller = () => setIsSoloTraveller(!isSoloTraveller);
  const handleTermsChange = () => setTermsAccepted(!termsAccepted);

  return (
    <div className="flex flex-col justify-center items-center">
      <img src="/icons/Logo.svg"></img>
      <div className="flex flex-col w-4/5 bg-gray-50 space-y-4 p-6 rounded-xl">
        <h1 className="text-2xl font-semibold mb-6">Complete your profile!</h1>
        <div className="w-full flex justify-center relative">
          <div className="relative">
            <Avatar className="w-[100px] h-[100px]">
              <AvatarImage src="/images/Cheryl.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            {/* Camera Icon Overlay */}
            <label className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg cursor-pointer">
              <Camera size={24} className="text-gray-600" />
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                accept="image/*"
                onChange={() => {}}
              />
            </label>
          </div>
        </div>
        <div className="w-full max-w-md space-y-4">
          <label className="block">
            Name
            <input
              type="text"
              className="w-full p-2 border rounded-lg mt-1"
              placeholder="Enter your name"
              value={user.userName}
              onChange={() => {}}
            />
          </label>

          <label className="block">
            Age
            <input
              type="number"
              className="w-full p-2 border rounded-lg mt-1"
              placeholder="Enter your age"
              value={user.age}
              onChange={() => {}}
            />
          </label>

          <label className="block">
            Gender
            <select
              className="w-full p-2 border rounded-lg mt-1"
              value="female"
              onChange={() => {}}
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label className="block">
            Purpose of travel
            <input
              type="text"
              className="w-full p-2 border rounded-lg mt-1"
              placeholder="e.g., Leisure, Business"
              value={user.purpose}
              onChange={() => {}}
            />
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isSoloTraveller}
              onChange={handleToggleSoloTraveller}
            />
            <span>Solo traveller</span>
          </label>

          <label className="block">
            Country of origin
            <input
              type="text"
              className="w-full p-2 border rounded-lg mt-1"
              placeholder="Enter your country"
              value={user.country}
              onChange={() => {}}
            />
          </label>

          <label className="block">
            Industry
            <input
              type="text"
              className="w-full p-2 border rounded-lg mt-1"
              placeholder="Enter your industry"
              value={user.industry}
              onChange={() => {}}
            />
          </label>

          <label className="flex items-center space-x-2">
            <span>Public Profile</span>
            <div className="relative inline-block w-10 align-middle select-none">
              <input
                type="checkbox"
                checked={isPublicProfile}
                onChange={handleTogglePublicProfile}
                className="absolute opacity-0 w-0 h-0"
              />
              <span
                className={`block w-10 h-6 rounded-full ${
                  isPublicProfile ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></span>
              <span
                className={`absolute top-1 bottom-0 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  isPublicProfile ? "transform translate-x-4" : ""
                }`}
              ></span>
            </div>
          </label>

          <label className="block">
            Bio
            <textarea
              className="w-full p-2 border rounded mt-1"
              rows="3"
              placeholder="Tell us a bit about yourself"
              value={user.bio}
              onChange={() => {}}
            ></textarea>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={handleTermsChange}
            />
            <span>I agree to the terms and conditions</span>
          </label>

          <Link href="/lyf-together">
            <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
