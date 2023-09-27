"use client";

import React from "react";

import Form from "@/app/(dashboard)/panels/components/Form";
import { usePanels } from "@/app/hooks/usePanels";

export default function page() {
  const { createPanel } = usePanels();

  return (
    <div>
      <Form createPanel={createPanel} />
    </div>
  );
}
