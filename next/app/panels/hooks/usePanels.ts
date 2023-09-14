import { useEffect, useState } from "react";

import PanelController from "@/domain/controller/Panel";
import PanelModel from "@/domain/models/Panel";
import useAuth from "@/app/hooks/useAuth";

export type CreatePanelProps = {
  title: string;
  description: string;
  password: string;
  clientPassword: string;
};

export const usePanels = () => {
  const [panels, setPanel] = useState<PanelModel[]>([]);

  const { getUser } = useAuth();
  const controller = new PanelController();

  useEffect(() => {
    const getPanel = async () => {
      const response = await controller.getPanels({
        userId: getUser()?.userId,
      });

      setPanel(response);
    };

    getPanel();
  }, []);

  const createPanel = async ({
    title,
    description,
    password,
    clientPassword,
  }: CreatePanelProps) => {
    const panel = new PanelModel({
      title,
      description,
      owner: getUser()?.userId, // Todo refactorar este parametro
      createdAt: new Date(),
      updatedAt: new Date(),
      password,
      clientPassword,
      status: "ACTIVE",
    });

    const response = await controller.createPanel({
      panel,
      userId: getUser()?.userId,
    });

    if (!panels) {
      return setPanel([response]);
    }

    setPanel([...panels, response]);
  };

  return { panels, createPanel };
};
