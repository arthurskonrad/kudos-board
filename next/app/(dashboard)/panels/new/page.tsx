"use client";

import React from "react";

import Form from "@/app/(dashboard)/panels/components/Form";
import { UsePanels } from "@/app/hooks/UsePanels";

export default function page() {
  const { createPanel } = UsePanels();

  return (
    <div>
      <Form createPanel={createPanel} />
    </div>
  );
}
