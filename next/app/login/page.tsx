"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import useAuth, { UserType } from "@/app/hooks/useAuth";

import Form from "@/app/login/components/Form";
import LoadingContainer from "@/app/ui/LoadingContainer";
import Loading from "@/app/ui/Loading";

export default function page() {
  const [userName, setUserName] = useState<string>("");
  const [authLoading, setAuthLoading] = useState(true);

  const { getUser, login: authLogin } = useAuth();

  const router = useRouter();

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    setAuthLoading(true);

    const loggedUser: UserType | null = authLogin({ userName });

    setAuthLoading(false);

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

  if (authLoading) {
    return (
      <LoadingContainer>
        <Loading size="lg" />
      </LoadingContainer>
    );
  }

  return (
    <div>
      <section className="h-screen">
        <div className="h-full">
          <div className="flex h-full md:flex-row flex-col">
            <div className="bg-emerald-900 bg-[url('/leaves-optimized.png')] bg-center bg-cover md:w-[50%] md:h-full w-full h-[40%]"></div>

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
}
