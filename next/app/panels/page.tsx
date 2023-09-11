"use client";

import Button from "@/app/ui/Button";
import Panels from "@/app/panels/components/Panels";
import { usePanels } from "@/app/panels/hooks/usePanels";

export default function page() {
  const { panels, createPanel } = usePanels()

  return (
    <>
      <Panels panels={panels} />

      <Button onClick={createPanel}>Criar Painel</Button>
    </>
  );
}
