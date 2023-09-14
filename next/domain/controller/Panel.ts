
import PanelModel from "../models/Panel";
import PanelService from "../service/Panel";

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

  async createPanel({ panel, userId }: { panel: PanelModel, userId: string }) {
    const response = await this.service.create({ panel: panel.getData(), userId });

    panel.slug = response.slug;

    return panel;
  }
}
