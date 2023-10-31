import KudosModel, { KudosModelType } from "@/domain/models/Kudos";
import KudosService, { createRequest } from "@/domain/service/Kudos";

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
    kudoSlug,
    userId,
  }: {
    kudoSlug: string;
    userId: string;
  }): Promise<KudosModel | undefined>  {
    const kudosData = await this.service.findBySlug({ userId, kudoSlug });

    if (!kudosData) {
      return ;
    }

    return new KudosModel(kudosData);
  }

  async createKudos({ kudosData, userId }: createRequest) {
    const response = await this.service.create({
      kudosData,
      userId,
    });

    kudosData.slug = response.slug;

    return kudosData;
  }
}
