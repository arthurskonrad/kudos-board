"use client";

import React from "react";

import Form from "@/app/panels/components/Form";
import { usePanels } from "@/app/panels/hooks/usePanels";

export default function page() {
  const { createPanel } = usePanels();

  return (
    <div>
      <Form createPanel={createPanel} />
    </div>
  );
}
