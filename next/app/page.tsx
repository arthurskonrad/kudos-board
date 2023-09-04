"use client";

import { useEffect, useState } from "react";

import PanelController from "@/domain/controller/Panel";
import PanelModel from "@/domain/models/Panel";

export default function Home() {
  const [panels, setPanel] = useState<PanelModel[]>();

  const controller = new PanelController();

  useEffect(() => {
    const getPanel = async () => {
      const response = await controller.getPanels();

      setPanel(response);
    };

    getPanel();
  }, []);

  const createPanel = async () => {
    const response = await controller.createPanel(
      new PanelModel({
        title: "Second Panel",
        owner: "Me",
        createdAt: new Date(),
        updatedAt: new Date(),
        password: "12345678",
        clientPassword: "12345678",
        status: "ACTIVE",
      })
    );

    if (!panels) {
      return setPanel([response]);
    }

    setPanel([...panels, response]);
  };

  if (!panels) {
    return (
      <main className="bg-gray-200 min-h-screen p-8">
        <p>Carregando...</p>
      </main>
    );
  }

  return (
    <main className="bg-gray-200 min-h-screen p-8">
      <ul>
        {panels.map((panel) => (
          <li
            key={panel.slug}
            className="flex gap-4 p-8 mb-8 bg-white shadow-md rounded-lg transition hover:shadow-lg hover:scale-[101%] cursor-pointer"
          >
            <ul>
              <li>
                <strong>title</strong>: {panel.title}
              </li>
              <li>
                <strong>slug</strong>: {panel.slug}
              </li>
              <li>
                <strong>owner</strong>: {panel.owner}
              </li>
              <li>
                <strong>createdAt</strong>: {panel.createdAt.toString()}
              </li>
              <li>
                <strong>updatedAt</strong>: {panel.updatedAt.toString()}
              </li>
              <li>
                <strong>password</strong>: {panel.password}
              </li>
              <li>
                <strong>clientPassword</strong>: {panel.clientPassword}
              </li>
              <li>
                <strong>status</strong>: {panel.status}
              </li>
            </ul>
          </li>
        ))}
      </ul>

      <button onClick={createPanel}>Create</button>
    </main>
  );
}
