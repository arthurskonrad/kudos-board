import React from "react";

type HeaderProps = {
  userName: string;
};

export default function Header({ userName }: HeaderProps) {
  return (
    <header className="bg-gray-300 p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h2>{userName}</h2>
        <span>logout</span>
      </div>
    </header>
  );
}
