"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import useAuth, { UserType } from "../hooks/useAuth";

import Image from "./components/Image";
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
          <div className="container h-full px-6 py-24">
            <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
              <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                <Image />
              </div>

              <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                <Form updateName={setUserName} onSubmit={login} />
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
