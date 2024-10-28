"use client";
import React from "react";
import UsersData from "../../data/UsersData.json";
import UserTab from "@/components/UserTab";

export default function Login() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <img src="/icons/Logo.svg"></img>
      <div>Please select a profile:</div>
      {UsersData.map((user, index) => (
        <UserTab key={index} userId={user.userId} userName={user.userName} />
      ))}
    </div>
  );
}
