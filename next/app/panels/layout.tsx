"use client";

import useAuth from "../hooks/useAuth";
import Header from "../ui/Header";

export default function page({ children }: any) {
  const { getUser } = useAuth();

  const userName = getUser().userName;

  return (
    <div>
      <Header userName={userName} />

      <div className="p-8">{children}</div>
    </div>
  );
}
