import Link from "next/link";
import React from "react";

type HeaderProps = {
  userName: string;
};

export default function Header({ userName }: HeaderProps) {
  return (
    <header className="bg-gray-300 p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h2>{userName}</h2>
        {userName ? (
          <Link href={"/"}>logout</Link>
        ) : (
          <Link href={"/login"}>login</Link>
        )}
      </div>
    </header>
  );
}
