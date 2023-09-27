export default class KudosService {
  constructor() {}

  async index({ userId, panelSlug }: { userId: string; panelSlug: string }) {
    try {
      let response = await fetch(`/api/kudos/${panelSlug}`, {
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
