"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import Button from "@/app/ui/Button";
import { UpdatePanelProps } from "@/app/hooks/UsePanels";
import PanelModel from "../../../../../domain/models/Panel";

export default function Form({
  updatePanel,
  panel,
}: {
  updatePanel: ({
    panelSlug,
    data,
  }: {
    panelSlug: string;
    data: UpdatePanelProps;
  }) => void;
  panel: PanelModel;
}) {
  const [title, setTitle] = useState<string>(panel.title);
  const [description, setDescription] = useState<string>(panel.description);
  const [password, setPassword] = useState<string>("");
  const [clientPassword, setClientPassword] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>();

  const router = useRouter();

  if (!panel.slug) {
    return;
  }

  const slug = panel.slug

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    const data = {
      title,
      description,
      password,
      clientPassword,
    };

    await updatePanel({ panelSlug: slug, data });

    router.push(`/panels/${slug}`);
  };

  const redirect = () => {
    router.push("/panels");
  };

  return (
    <div className="w-full">
      <h1>Editar Painel</h1>

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

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
              isPasswordValid ? "border-emerald-500" : ""
            }`}
            id="password"
            type="password"
            placeholder="******************"
          />
          {isPasswordValid && (
            <p className="text-emerald-500 text-xs italic">
              Please choose a password.
            </p>
          )}
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="clientPassword"
          >
            Client Password
          </label>
          <input
            onChange={(event) => setClientPassword(event.target.value)}
            value={clientPassword}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
              isPasswordValid ? "border-emerald-500" : ""
            }`}
            id="clientPassword"
            type="password"
            placeholder="******************"
          />
          {isPasswordValid && (
            <p className="text-emerald-500 text-xs italic">
              Please choose a password.
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <Button onClick={redirect}>Cancelar</Button>
          <Button onClick={(event) => submit(event)}>Editar Painel</Button>
        </div>
      </form>
    </div>
  );
}
