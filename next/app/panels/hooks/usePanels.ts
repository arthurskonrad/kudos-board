import { useEffect, useState } from "react";

import PanelController from "@/domain/controller/Panel";
import PanelModel from "@/domain/models/Panel";
import useAuth from "@/app/hooks/useAuth";

export const usePanels = () => {
  const [panels, setPanel] = useState<PanelModel[]>([]);

  const { getUser } = useAuth();
  const controller = new PanelController();

  useEffect(() => {
    const getPanel = async () => {
      const response = await controller.getPanels({ userId: getUser()?.userId });

      setPanel(response);
    };

    getPanel();
  }, []);

  const createPanel = async () => {
    const panel = new PanelModel({
      title: "Second Panel",
      owner: getUser()?.userId, // Todo refactorar este parametro
      createdAt: new Date(),
      updatedAt: new Date(),
      password: "12345678",
      clientPassword: "12345678",
      status: "ACTIVE",
    });

    const response = await controller.createPanel({ panel, userId: getUser()?.userId});

    if (!panels) {
      return setPanel([response]);
    }

    setPanel([...panels, response]);
  };

  return { panels, createPanel }
}
