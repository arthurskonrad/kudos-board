"use client";

import { useState, useEffect } from "react";
import Panels from "@/app/(dashboard)/panels/components/Panels";
import { usePanels } from "@/app/hooks/usePanels";
import Anchor from "@/app/ui/Anchor";
import Loading from "@/app/ui/Loading";
import LoadingContainer from "@/app/ui/LoadingContainer";
import PanelModel from "@/domain/models/Panel";

export default function page() {
  const [panels, setPanels] = useState<PanelModel[]>([]);

  const { getPanels } = usePanels();

  useEffect(() => {
    const getPanel = async () => {
      setPanels(await getPanels());
    };

    getPanel();
  }, []);

  if (!panels) {
    return (
      <LoadingContainer>
        <Loading size="lg" />
      </LoadingContainer>
    );
  }

  return (
    <div>
      <div className="mb-4">
        <Anchor type="primary" href="/panels/new">
          Criar Painel
        </Anchor>
      </div>

      <Panels panels={panels} />
    </div>
  );
}
