import React from "react";
import { usePanels } from "@/app/hooks/usePanels";
import { useKudos } from "@/app/hooks/useKudos";
import Kudos from "@/app/(dashboard)/kudos/components/Kudos";
import useAuth from "@/app/hooks/useAuth";
import Panel from "../components/Panel";

export default async function page({ params }: any) {
  const { findBySlug } = usePanels();
  const { getUser } = useAuth();

  const panelSlug: string =
    typeof params.panelSlug === "object"
      ? params.panelSlug[0]
      : params.panelSlug;

  const getPanel = async () => {
    const newPanel = await findBySlug({
      panelSlug,
      userId: getUser()?.userId,
    });

    if (!newPanel) {
      return;
    }

    return newPanel;
  };

  const panel = await getPanel();

  const { getKudos } = useKudos();

  const kudos = await getKudos({ panelSlug });

  if (!panel) {
    return null;
  }

  return (
    <>
      <Panel panel={panel}/>
      <Kudos kudos={kudos} panelSlug={panelSlug} />
    </>
  );
}
