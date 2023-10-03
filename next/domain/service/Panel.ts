import { PanelModelType } from "@/domain/models/Panel";

type createRequest = {
  panel: PanelModelType;
  userId: string;
};

export default class PanelService {
  constructor() {}

  async index({ userId }: { userId: string }) {
    try {
      let response = await fetch("/api/panels", {
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
}
