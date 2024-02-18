import KudosModel, { KudosModelType } from "../models/Kudos";
import KudosService, { createRequest, updateRequest } from "../service/Kudos";

export default class KudosController {
  public service: KudosService;

  constructor() {
    this.service = new KudosService();
  }

  async getKudos({ userId, panelSlug }: { userId: string; panelSlug: string }) {
    const response = await this.service.index({ userId, panelSlug });

    if (!response) {
      return [];
    }

    return response.map((data: KudosModelType) => {
      return new KudosModel(data);
    });
  }

  async findBySlug({
    kudosSlug,
    userId,
  }: {
    kudosSlug: string;
    userId: string;
  }): Promise<KudosModel | undefined> {
    const kudosData = await this.service.findBySlug({
      userId,
      kudosSlug: kudosSlug,
    });

    if (!kudosData) {
      return;
    }

    return new KudosModel(kudosData);
  }

  async createKudos({ kudosData, userId }: createRequest) {
    const response = await this.service.create({
      kudosData,
      userId,
    });

    kudosData.slug = response.slug;

    return new KudosModel(kudosData);
  }

  async updateKudos({ kudosSlug, data, userId }: updateRequest) {
    const response = await this.service.update({
      kudosSlug,
      data,
      userId,
    });

    return new KudosModel(response);
  }
}
