import PanelController from "@/domain/controller/Panel";
import PanelModel from "@/domain/models/Panel";
import UseAuth from "@/app/hooks/UseAuth";

export type CreatePanelProps = {
  title: string;
  description: string;
  password: string;
  clientPassword: string;
};

export type UpdatePanelProps = {
  title: string;
  description: string;
  password: string;
  clientPassword: string;
};

export const UsePanels = () => {
  const { getUser } = UseAuth();
  const controller = new PanelController();

  const getPanels = async () => {
    const response = await controller.getPanels({
      userId: getUser()?.userId,
    });

    return response;
  };

  const findBySlug = async ({
    panelSlug,
    userId,
  }: {
    panelSlug: string;
    userId: string;
  }): Promise<PanelModel | undefined> => {
    return controller.findBySlug({ panelSlug, userId });
  };

  const createPanel = async ({
    title,
    description,
    password,
    clientPassword,
  }: CreatePanelProps) => {
    const panel = {
      title,
      description,
      owner: getUser()?.userId, // Todo refactorar este parametro
      createdAt: new Date(),
      updatedAt: new Date(),
      password,
      clientPassword,
      status: "ACTIVE",
    };

    const response = await controller.createPanel({
      panel,
      userId: getUser()?.userId,
    });

    return response;
  };

  const updatePanel = async ({ panelSlug, data}: { panelSlug: string, data: UpdatePanelProps}) => {
    const response = await controller.updatePanel({
      panelSlug,
      data,
      userId: getUser()?.userId,
    });

    return response;
  };

  return { getPanels, createPanel, updatePanel, findBySlug };
};
