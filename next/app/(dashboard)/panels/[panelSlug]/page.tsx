"use client";

import { useState, useEffect } from "react";
import PanelModel from "@/domain/models/Panel";
import React from "react";
import { usePanels } from "@/app/hooks/usePanels";
import { useParams } from "next/navigation";
import { useKudos } from "@/app/hooks/useKudos";
import Kudos from "@/app/(dashboard)/kudos/components/Kudos";
import useAuth from "@/app/hooks/useAuth";
import PanelHeader from "@/app/components/PanelHeader"

export default function page() {
  const [panel, setPanel] = useState<PanelModel>();

  const { findBySlug } = usePanels();
  const { getUser } = useAuth();

  const params = useParams();

  const panelSlug: string =
    typeof params.panelSlug === "object"
      ? params.panelSlug[0]
      : params.panelSlug;

  useEffect(() => {
    const getPanel = async () => {
      const newPanel = await findBySlug({
        panelSlug,
        userId: getUser()?.userId,
      });

      if (!newPanel) {
        return;
      }

      setPanel(newPanel);
    };

    getPanel();
  }, []);

  const { kudos } = useKudos({ panelSlug });

  return (
    <>
      <PanelHeader panel={panel}/>

      <Kudos kudos={kudos} panelSlug={panelSlug} />
    </>
  );
}
