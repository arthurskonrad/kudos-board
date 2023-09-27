import Button from "@/app/ui/Button";
import Input from "@/app/ui/Input";
import React from "react";

type FormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  setUserName: (name: string) => void;
  userName: string;
};

export default function Form({ onSubmit, setUserName, userName }: FormProps) {
  return (
    <form onSubmit={(event) => onSubmit(event)} className="w-full">
      <Input
        onChange={setUserName}
        value={userName}
        type="text"
        placeholder="Nome"
        label="Nome"
        id="Nome"
      />

      <Button type="submit" full>
        Sign in
      </Button>
    </form>
  );
}
