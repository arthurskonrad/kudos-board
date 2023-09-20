"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import useAuth, { UserType } from "./hooks/useAuth";

export default function Home() {
  const [userName, setUserName] = useState<string>("");
  const { getUser, login: authLogin } = useAuth();

  const router = useRouter();

  const login = () => {
    const loggedUser: UserType | null = authLogin({ userName });

    if (!loggedUser) {
      return;
    }

    if (loggedUser?.userId) {
      router.push("/panels");
    }
  };

  const user = getUser();

  if (user?.userId) {
    router.push("/panels");
  }

  if (!user?.userId) {
    return (
      <div>
        <input
          type="text"
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={login}>Entrar</button>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
