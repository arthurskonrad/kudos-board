"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import useAuth, { UserType } from "../hooks/useAuth";

import Form from "./components/Form";

export default function page() {
  const [userName, setUserName] = useState<string>("");
  const { getUser, login: authLogin } = useAuth();

  const router = useRouter();

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    const loggedUser: UserType | null = authLogin({ userName });

    if (!loggedUser) {
      event?.preventDefault();

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
        <section className="h-screen">
          <div className="h-full">
            <div className="flex h-full md:flex-row flex-col">
              <div className="bg-[url('/leaves.jpg')] bg-center bg-cover md:w-[50%] md:h-full w-full h-[40%]"></div>

              <div className="md:w-[50%] w-full p-12 flex items-center">
                <Form
                  setUserName={setUserName}
                  userName={userName}
                  onSubmit={login}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
