"use client";

import React from "react";

import EditForm from "@/app/(dashboard)/panels/components/EditForm";
import { UsePanels } from "@/app/hooks/UsePanels";
import UseAuth from "@/app/hooks/UseAuth";

export default async function page({ params }: any) {
  const { updatePanel } = UsePanels();

  const { findBySlug } = UsePanels();

  const { getUser } = UseAuth();

  const panel = await findBySlug({
    panelSlug: params.panelSlug,
    userId: getUser().userId,
  });

  if (!panel) {
    return <div>Não foi encontrado nenhum Painel</div>
  }

  return (
    <div>
      <EditForm updatePanel={updatePanel} panel={panel} />
    </div>
  );
}
