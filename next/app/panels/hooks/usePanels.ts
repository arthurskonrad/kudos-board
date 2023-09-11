import { useEffect, useState } from "react";

import PanelController from "@/domain/controller/Panel";
import PanelModel from "@/domain/models/Panel";

export const usePanels = () => {
  const [panels, setPanel] = useState<PanelModel[]>([]);

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

  return { panels, createPanel }
}
