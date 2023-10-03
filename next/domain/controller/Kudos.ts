import KudosModel from "@/domain/models/Kudos";
import KudosService from "@/domain/service/Kudos";

export default class KudosController {
  public service: KudosService;

  constructor() {
    this.service = new KudosService();
  }

  async getKudos({ userId, panelSlug }: { userId: string; panelSlug: string }) {
    const response = await this.service.index({ userId, panelSlug });

    if (!response.kudos) {
      return [];
    }

    return response.kudos.map((data: KudosModel) => {
      return new KudosModel(data);
    });
  }
}
