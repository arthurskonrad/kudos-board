
import PanelModel from "../models/Panel";
import PanelService from "../service/Panel";

export default class PanelController {
  public service: PanelService;

  constructor() {
    this.service = new PanelService();
  }

  async getPanels() {
    const response = await this.service.index();

    if (!response.panel) {
      return [];
    }

    return response.panel.map((data: PanelModel) => {
      return new PanelModel(data);
    });
  }

  async createPanel(panel: PanelModel) {
    const response = await this.service.create({ panel: panel.getData(), userId: "1" });

    panel.slug = response.slug;

    return panel;
  }
}
