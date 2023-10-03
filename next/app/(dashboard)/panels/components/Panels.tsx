"use client";

import React from "react";

import Panel from "@/app/(dashboard)/panels/components/Panel";
import { PanelModelType } from "@/domain/models/Panel";

type PanelsProps = {
  panels: PanelModelType[];
};

export default function Panels({ panels }: PanelsProps) {
  return (
    <ul>
      {panels.map((panel) => (
        <Panel panel={panel} key={panel.slug} />
      ))}
    </ul>
  );
}
