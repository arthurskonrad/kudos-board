import UseAuth from "@/app/hooks/UseAuth";
import Button from "@/app/ui/Button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Form({
  createKudos,
  panelSlug,
}: {
  createKudos: (kudosData: any) => {};
  panelSlug: string;
}) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [to, setTo] = useState<string>("");

  const { getUser } = UseAuth();

  const router = useRouter();

  const submit = async (event: any) => {
    event.preventDefault();

    const kudosData = {
      title,
      description,
      from: {
        id: getUser().userId,
        name: getUser().userName,
      },
      to,
      panelSlug,
    };

    const newKudos = await createKudos({ kudosData, userId: getUser().userId });

    console.log(newKudos);

    redirect();
  };

  const redirect = () => {
    router.push(`/panels/${panelSlug}`);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={submit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Título
          </label>
          <input
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Título"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Descrição
          </label>
          <textarea
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            id="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="description"
            cols={30}
            rows={10}
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="to"
          >
            Para
          </label>
          <input
            onChange={(event) => setTo(event.target.value)}
            value={to}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="to"
            type="text"
            placeholder="Para"
          />
        </div>

        <div className="flex items-center justify-between">
          <Button onClick={redirect}>Cancelar</Button>
          <Button onClick={(event) => submit(event)}>Criar Kudos</Button>
        </div>
      </form>
    </div>
  );
}
