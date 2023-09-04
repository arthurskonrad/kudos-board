import { PanelModelType } from "../models/Panel";

export default class PanelService {
  constructor() {}

  async index() {
    try {
      let response = await fetch("/api");
      let json = await response.json();

      return json;
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os dados:", error);
    }
  }

  async create(panel: PanelModelType) {
    try {
      let response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(panel)
      })

      let json = await response.json();

      return json;
    } catch (error) {
      console.error("Ocorreu um erro ao salvar os dados:", error);
    }
  }
}
