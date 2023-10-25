import React from "react";
import { UsePanels } from "@/app/hooks/UsePanels";
import { UseKudos } from "@/app/hooks/UseKudos";
import Kudos from "@/app/(dashboard)/kudos/components/Kudos";
import UseAuth from "@/app/hooks/UseAuth";
import Panel from "../components/Panel";

export default async function page({ params }: any) {
  const { findBySlug } = UsePanels();
  const { getUser } = UseAuth();

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

  const { getKudos } = UseKudos();

  const kudos = await getKudos({ panelSlug });

  if (!panel) {
    return null;
  }

  return (
    <>
      <Panel panel={panel} />
      <Kudos kudos={kudos} panelSlug={panelSlug} />
    </>
  );
}
