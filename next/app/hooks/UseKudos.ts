import KudosController from "@/domain/controller/Kudos";
import UseAuth from "@/app/hooks/UseAuth";
import KudosModel from "@/domain/models/Kudos";

export const UseKudos = () => {
  const { getUser } = UseAuth();
  const controller = new KudosController();

  const getKudos = async ({ panelSlug }: { panelSlug?: string }) => {
    if (!panelSlug) {
      return;
    }

    const response = await controller.getKudos({
      userId: getUser()?.userId,
      panelSlug,
    });

    return response;
  };

  const findBySlug = async ({
    kudoSlug,
    userId,
  }: {
    kudoSlug: string;
    userId: string;
  }): Promise<KudosModel | undefined> => {
    return controller.findBySlug({ kudoSlug, userId });
  };

  return { getKudos, findBySlug };
};
