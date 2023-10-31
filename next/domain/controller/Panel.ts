import PanelModel from "@/domain/models/Panel";
import PanelService, { createRequest } from "@/domain/service/Panel";

export default class PanelController {
  public service: PanelService;

  constructor() {
    this.service = new PanelService();
  }

  async getPanels({ userId }: { userId: string }) {
    const response = await this.service.index({ userId });

    if (!response.panel) {
      return [];
    }

    return response.panel.map((data: PanelModel) => {
      return new PanelModel(data);
    });
  }

  async findBySlug({
    panelSlug,
    userId,
  }: {
    panelSlug: string;
    userId: string;
  }): Promise<PanelModel | undefined>  {
    const panelData = await this.service.findBySlug({ userId, panelSlug });

    if (!panelData) {
      return ;
    }

    return new PanelModel(panelData);
  }

  async createPanel({ panel, userId }: createRequest) {
    const response = await this.service.create({
      panel,
      userId,
    });

    panel.slug = response.slug;

    return new PanelModel(panel);
  }
}
