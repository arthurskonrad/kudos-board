"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import UseAuth from "@/app/hooks/UseAuth";
import Button from "@/app/ui/Button";
import KudosModel from "@/domain/models/Kudos";
import { updateRequest } from "@/domain/service/Kudos";

export default function EditKudos({
  updateKudos,
  kudos,
}: {
  updateKudos: (params: updateRequest) => {};
  kudos: KudosModel;
}) {
  const [title, setTitle] = useState<string>(kudos.title);
  const [description, setDescription] = useState<string>(kudos.description);
  const [to, setTo] = useState<string>(kudos.to);

  const router = useRouter();
  const { getUser } = UseAuth();

  const submit = async (event: any) => {
    event.preventDefault();

    const kudosData = {
      title,
      description,
      to,
    };

    const kudosSlug = kudos.slug || "";

    await updateKudos({ kudosSlug, data: kudosData, userId: getUser().userId });

    redirect();
  };

  const redirect = () => {
    router.push(`/kudos/${kudos.slug}`);
  };
  return (
    <div className="w-full">
      <form
        action="put"
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
          <Button onClick={(event) => submit(event)}>Editar Kudos</Button>
        </div>
      </form>
    </div>
  );
}
