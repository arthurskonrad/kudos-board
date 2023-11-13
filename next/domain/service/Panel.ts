import { PanelModelType } from "@/domain/models/Panel";

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
      let response = await fetch("http://localhost:3000/api/panels", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "user-id": userId,
        },
      });
      let json = await response.json();

      return json;
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
      let response = await fetch(
        `http://localhost:3000/api/panels/${panelSlug}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "user-id": userId,
          },
        }
      );
      let json = await response.json();

      return json;
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os dados:", error);
    }
  }

  async create({ panel, userId }: createRequest) {
    try {
      let response = await fetch("/api/panels", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "user-id": userId,
        },
        body: JSON.stringify(panel),
      });

      let json = await response.json();

      return json;
    } catch (error) {
      console.error("Ocorreu um erro ao salvar os dados:", error);
    }
  }

  async update({ panelSlug, data, userId }: updateRequest) {
    try {
      let response = await fetch(`/api/panels/${panelSlug}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "user-id": userId,
        },
        body: JSON.stringify(data),
      });

      let json = await response.json();

      return json;
    } catch (error) {
      console.error("Ocorreu um erro ao salvar os dados:", error);
    }
  }
}
