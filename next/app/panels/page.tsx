"use client";

import Panels from "@/app/panels/components/Panels";
import Form from "@/app/panels/components/Form";
import { usePanels } from "@/app/panels/hooks/usePanels";

export default function page() {
  const { panels, createPanel } = usePanels();

  return (
    <>
      <Panels panels={panels} />

      <Form createPanel={createPanel} />
    </>
  );
}
