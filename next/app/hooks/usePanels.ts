import PanelController from "@/domain/controller/Panel";
import PanelModel from "@/domain/models/Panel";
import useAuth from "@/app/hooks/useAuth";

export type CreatePanelProps = {
  title: string;
  description: string;
  password: string;
  clientPassword: string;
};

export const usePanels = () => {
  const { getUser } = useAuth();
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
    const panel = new PanelModel({
      title,
      description,
      owner: getUser()?.userId, // Todo refactorar este parametro
      createdAt: new Date(),
      updatedAt: new Date(),
      password,
      clientPassword,
      status: "ACTIVE",
    });

    const response = await controller.createPanel({
      panel,
      userId: getUser()?.userId,
    });

    return response;
  };

  return { getPanels, createPanel, findBySlug };
};
