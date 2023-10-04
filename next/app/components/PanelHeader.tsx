import React from "react";

import Panel from "@/app/(dashboard)/panels/components/Panel";
import Loading from "@/app/ui/Loading";
import LoadingContainer from "@/app/ui/LoadingContainer";
import PanelModel from "@/domain/models/Panel";

export default function PanelHeader({ panel }: { panel: PanelModel | undefined}) {
  return (
    <>
      {panel ? (
        <Panel panel={panel} />
      ) : (
        <LoadingContainer>
          <Loading size="lg" />
        </LoadingContainer>
      )}
    </>
  );
}
