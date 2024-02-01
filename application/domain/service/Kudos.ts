import { KudosModelType } from "../models/Kudos";

export type createRequest = {
  kudosData: KudosModelType;
  userId: string;
};

export type updateKudosModelType = {
  title: string;
  description: string;
  to: string;
};

export type updateRequest = {
  kudosSlug: string;
  data: updateKudosModelType;
  userId: "string";
};
export default class KudosService {
  constructor() {}

  async index({ userId, panelSlug }: { userId: string; panelSlug: string }) {
    try {
      const response = await fetch(
        `http://mock-api:8080/api/panels/${panelSlug}/kudos`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "user-id": userId,
          },
        },
      );
      const json = await response.json();

      return json;
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os dados:", error);
    }
  }

  async findBySlug({
    kudosSlug,
    userId,
  }: {
    kudosSlug: string;
    userId: string;
  }) {
    try {
      const response = await fetch(
        `http://mock-api:8080/api/kudos/${kudosSlug}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "user-id": userId,
          },
        },
      );
      return await response.json();
    } catch (error) {
      console.error("Ocorreu um erro ao buscar os dados:", error);
    }
  }

  async create({ kudosData, userId }: createRequest) {
    try {
      const response = await fetch("http://mock-api:8080/api/kudos", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "user-id": userId,
        },
        body: JSON.stringify(kudosData),
      });

      return await response.json();
    } catch (error) {
      console.error("Ocorreu um erro ao salvar os dados:", error);
    }
  }

  async update({ kudosSlug, data, userId }: updateRequest) {
    try {
      const response = await fetch(
        `http://mock-api:8080/api/kudos/${kudosSlug}`,
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
