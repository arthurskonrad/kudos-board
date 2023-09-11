import React from "react";

import Panel from "@/app/panels/components/Panel";
import { PanelModelType } from "@/domain/models/Panel";

type PanelsProps = {
  panels: PanelModelType[]
}

export default function Panels({panels}: PanelsProps) {
  if (!panels) {
    return <p>Carregando...</p>;
  }

  return (
    <ul>
      {panels.map((panel) => (
        <Panel panel={panel} key={panel.slug} />
      ))}
    </ul>
  );
}
