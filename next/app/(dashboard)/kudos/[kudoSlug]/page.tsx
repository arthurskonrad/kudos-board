import React from "react";
import { UseKudos } from "@/app/hooks/UseKudos";
import Kudo from "@/app/(dashboard)/kudos/components/Kudo";
import KudosModel, { KudosModelType } from "../../../../../domain/models/Kudos";
import UseAuth from "@/app/hooks/UseAuth";
import { UsePanels } from "@/app/hooks/UsePanels";
import Panel from "../../panels/components/Panel";
import Anchor from "@/app/ui/Anchor";

export default async function page({ params }: any) {
  const kudoSlug: string =
    typeof params.kudoSlug === "object" ? params.kudoSlug[0] : params.kudoSlug;

  const { findBySlug: findKudosBySlug } = UseKudos();
  const { findBySlug } = UsePanels();
  const { getUser } = UseAuth();

  const userId = getUser()?.userId;

  const kudos: KudosModel | undefined = await findKudosBySlug({
    kudoSlug,
    userId,
  });

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
      <div className="mb-4 flex gap-4">
        <Anchor type="primary" href={`/kudos/${kudoSlug}/edit`}>
          Editar Kudos
        </Anchor>
      </div>

      <Panel panel={panel} />
      <Kudo kudo={kudos} />
    </>
  );
}
