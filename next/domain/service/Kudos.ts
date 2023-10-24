export default class KudosService {
  constructor() {}

  async index({ userId, panelSlug }: { userId: string; panelSlug: string }) {
    try {
      let response = await fetch(`http://localhost:3000/api/panels/${panelSlug}/kudos`, {
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

  async findBySlug({ kudoSlug, userId }: { kudoSlug: string, userId: string }) {
    try {
      let response = await fetch(`http://localhost:3000/api/kudos/${kudoSlug}`, {
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
}
