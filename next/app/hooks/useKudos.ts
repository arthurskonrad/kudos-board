import KudosController from "@/domain/controller/Kudos";
import useAuth from "@/app/hooks/useAuth";
import KudosModel from "@/domain/models/Kudos";

export const useKudos = () => {
  const { getUser } = useAuth();
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
