import { PanelModelType } from "../models/Panel";

export type createRequest = {
  panel: PanelModelType;
  userId: string;
};

export type updateRequest = {
  panelSlug: string;
  data: PanelModelType;
  userId: string;
};

export default class PanelService {
  constructor() {}

  async index({ userId }: { userId: string }) {
    try {
      const response = await fetch("http://mock-api:8080/panel", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "user-id": userId,
        },
      });

      return await response.json();
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os dados:", error);
    }
  }

  async findBySlug({
    panelSlug,
    userId,
  }: {
    panelSlug: string;
    userId: string;
  }) {
    try {
      const response = await fetch(`http://mock-api:8080/panels/${panelSlug}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "user-id": userId,
        },
      });
      return await response.json();
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os dados:", error);
    }
  }

  async create({ panel, userId }: createRequest) {
    try {
      const response = await fetch("http://mock-api:8080/api/panels", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "user-id": userId,
        },
        body: JSON.stringify(panel),
      });

      return await response.json();
    } catch (error) {
      console.error("Ocorreu um erro ao salvar os dados:", error);
    }
  }

  async update({ panelSlug, data, userId }: updateRequest) {
    try {
      const response = await fetch(
        `http://mock-api:8080/api/panels/${panelSlug}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "user-id": userId,
          },
          body: JSON.stringify(data),
        },
      );

      return await response.json();
    } catch (error) {
      console.error("Ocorreu um erro ao salvar os dados:", error);
    }
  }
}
