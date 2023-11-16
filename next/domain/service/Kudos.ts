import { KudosModelType } from "../models/Kudos";

export type createRequest = {
  kudosData: KudosModelType;
  userId: string;
};

export type updateKudosModelType = {
  title: string,
  description: string,
  to: string,
}

export type updateRequest = {
  kudosSlug: string;
  data: updateKudosModelType;
  userId: "string";
};
export default class KudosService {
  constructor() {}

  async index({ userId, panelSlug }: { userId: string; panelSlug: string }) {
    try {
      let response = await fetch(
        `http://localhost:3000/api/panels/${panelSlug}/kudos`,
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

  async findBySlug({ kudoSlug, userId }: { kudoSlug: string; userId: string }) {
    try {
      let response = await fetch(
        `http://localhost:3000/api/kudos/${kudoSlug}`,
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

  async create({ kudosData, userId }: createRequest) {
    try {
      let response = await fetch("/api/kudos", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "user-id": userId,
        },
        body: JSON.stringify(kudosData),
      });

      let json = await response.json();

      return json;
    } catch (error) {
      console.error("Ocorreu um erro ao salvar os dados:", error);
    }
  }

  async update({ kudosSlug, data, userId }: updateRequest) {
    try {
      let response = await fetch(`/api/kudos/${kudosSlug}`, {
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
