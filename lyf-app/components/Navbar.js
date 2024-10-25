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
    <div className="fixed left-0 bottom-0 w-full rounded-full bg-black opacity-85 h-16 flex items-center px-6">
      <div className="flex justify-around items-center w-full">
        <Link href="/">
          <div
            className={`${
              isActive("/") ? "text-white" : "text-navbar-inactive"
            } w-15 flex flex-col items-center`}
          >
            <Compass size={28} />
            <div className="text-sm">Discover</div>
          </div>
        </Link>
        <Link href="/events">
          <div
            className={`${
              isActive("/events") || isStartsWith("/roadmap/")
                ? "bg-website-red text-white rounded-lg "
                : "text-navbar-inactive"
            } w-15 flex flex-col items-center`}
          >
            <CalendarStar size={28} />
            <div className="text-sm">Events</div>
          </div>
        </Link>
        <Link href="/bookings">
          <div
            className={`${
              isActive("/bookings")
                ? "bg-website-red text-white rounded-lg"
                : "text-navbar-inactive"
            } w-15 flex flex-col items-center`}
          >
            <CalendarCheck size={28} />
            <div className="text-sm">Bookings</div>
          </div>
        </Link>
        <Link href="/qr-scan">
          <div
            className={`${
              isActive("/qr-scan")
                ? "bg-website-red text-white rounded-lg"
                : "text-navbar-inactive"
            } w-15 flex flex-col items-center`}
          >
            <QrCode size={28} />
            <div className="text-sm">QR Scan</div>
          </div>
        </Link>
        <Link href="/chat">
          <div
            className={`${
              isActive("/chat")
                ? "bg-website-red text-white rounded-lg"
                : "text-navbar-inactive"
            } w-15 flex flex-col items-center`}
          >
            <ChatCircle size={28} />
            <div className="text-sm">Chat</div>
          </div>
        </Link>
        <Link href="/profile">
          <div
            className={`${
              isActive("/profile")
                ? "bg-website-red text-white rounded-lg"
                : "text-navbar-inactive"
            } w-15 flex flex-col items-center`}
          >
            <User size={28} />
            <div className="text-sm">Profile</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
