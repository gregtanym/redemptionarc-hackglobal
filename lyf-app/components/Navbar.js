"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Compass,
  CalendarStar,
  CalendarCheck,
  QrCode,
  ChatCircle,
  User,
} from "@phosphor-icons/react";
const Navbar = () => {
  const pathName = usePathname();

  const isActive = (pathname) => pathName === pathname;
  const isStartsWith = (pathname) => pathName.startsWith(pathname);

  return (
      <div className="z-20 mb-4 fixed left-4 right-4 bottom-4 rounded-full bg-black opacity-85 h-[70px] flex items-center px-4 shadow-lg">
        <div className="flex justify-around items-center w-full">
          <Link href="/">
            <div
                className={`${
                    isActive("/") ? "text-white" : "text-navbar-inactive"
                } w-15 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-110`}
            >
              <Compass size={24} className="transition-colors duration-300 ease-in-out" />
              <div className="text-xs mt-1">Discover</div>
            </div>
          </Link>
          <Link href="/events">
            <div
                className={`${
                    isActive("/events") || isStartsWith("/roadmap/")
                        ? "bg-website-red text-white rounded-lg"
                        : "text-navbar-inactive"
                } w-15 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-110`}
            >
              <CalendarStar size={24} className="transition-colors duration-300 ease-in-out" />
              <div className="text-xs mt-1">Events</div>
            </div>
          </Link>
          <Link href="/bookings">
            <div
                className={`${
                    isActive("/bookings")
                        ? "bg-website-red text-white rounded-lg"
                        : "text-navbar-inactive"
                } w-15 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-110`}
            >
              <CalendarCheck size={24} className="transition-colors duration-300 ease-in-out" />
              <div className="text-xs mt-1">Bookings</div>
            </div>
          </Link>
          <Link href="/qr-scan">
            <div
                className={`${
                    isActive("/qr-scan")
                        ? "bg-website-red text-white rounded-lg"
                        : "text-navbar-inactive"
                } w-15 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-110`}
            >
              <QrCode size={24} className="transition-colors duration-300 ease-in-out" />
              <div className="text-xs mt-1">QR Scan</div>
            </div>
          </Link>
          <Link href="/chat">
            <div
                className={`${
                    isActive("/chat")
                        ? "bg-website-red text-white rounded-lg"
                        : "text-navbar-inactive"
                } w-15 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-110`}
            >
              <ChatCircle size={24} className="transition-colors duration-300 ease-in-out" />
              <div className="text-xs mt-1">Chat</div>
            </div>
          </Link>
          <Link href="/profile">
            <div
                className={`${
                    isActive("/profile")
                        ? "bg-website-red text-white rounded-lg"
                        : "text-navbar-inactive"
                } w-15 flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-110`}
            >
              <User size={24} className="transition-colors duration-300 ease-in-out" />
              <div className="text-xs mt-1">Profile</div>
            </div>
          </Link>
        </div>
      </div>
  );
};

export default Navbar;
