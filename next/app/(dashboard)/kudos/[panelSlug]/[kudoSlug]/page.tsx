"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useKudos } from "@/app/hooks/useKudos";
import Kudo from "@/app/(dashboard)/kudos/components/Kudo";
import { KudosModelType } from "@/domain/models/Kudos";
import LoadingContainer from "@/app/ui/LoadingContainer";
import Loading from "@/app/ui/Loading";
import useAuth from "@/app/hooks/useAuth";
import { usePanels } from "@/app/hooks/usePanels";
import PanelModel from "@/domain/models/Panel";
import PanelHeader from "@/app/components/PanelHeader"

export default function page() {
  const [panel, setPanel] = useState<PanelModel>();

  const params = useParams();

  const panelSlug: string =
    typeof params.panelSlug === "object"
      ? params.panelSlug[0]
      : params.panelSlug;

  const kudoSlug: string =
    typeof params.kudoSlug === "object" ? params.kudoSlug[0] : params.kudoSlug;

  const { kudos, getKudo } = useKudos({ panelSlug, kudoSlug });
  const { findBySlug } = usePanels();
  const { getUser } = useAuth();

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

  if (kudos.length <= 0) {
    return (
      <LoadingContainer>
        <Loading size="lg" />
      </LoadingContainer>
    );
  }

  const kudo: KudosModelType | undefined = getKudo();

  if (!kudo) {
    return null;
  }

  return (
    <>
      <PanelHeader panel={panel} />
      <Kudo kudo={kudo} />
    </>
  );
}
