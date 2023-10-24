import React from "react";
import { useKudos } from "@/app/hooks/useKudos";
import Kudo from "@/app/(dashboard)/kudos/components/Kudo";
import KudosModel, { KudosModelType } from "@/domain/models/Kudos";
import useAuth from "@/app/hooks/useAuth";
import { usePanels } from "@/app/hooks/usePanels";
import Panel from "../../panels/components/Panel";

export default async function page({ params }: any) {
  const kudoSlug: string =
    typeof params.kudoSlug === "object" ? params.kudoSlug[0] : params.kudoSlug;

  const { findBySlug: findKudosBySlug } = useKudos();
  const { findBySlug } = usePanels();
  const { getUser } = useAuth();

  const userId = getUser()?.userId;

  const kudos: KudosModel | undefined = await findKudosBySlug({ kudoSlug, userId })

  const getPanel = async () => {
    const newPanel = await findBySlug({
      panelSlug: kudos?.panelSlug || "",
      userId: getUser()?.userId,
    });

    if (!newPanel) {
      return;
    }

    return newPanel;
  };

  const panel = await getPanel();

  if (!kudos) {
    return null;
  }

  if (!panel) {
    return null;
  }

  return (
    <>
      <Panel panel={panel} />
      <Kudo kudo={kudos} />
    </>
  );
}
