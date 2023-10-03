"use client";

import Panels from "@/app/(dashboard)/panels/components/Panels";
import { usePanels } from "@/app/hooks/usePanels";
import Anchor from "@/app/ui/Anchor";
import Loading from "@/app/ui/Loading";
import LoadingContainer from "@/app/ui/LoadingContainer";

export default function page() {
  const { panels } = usePanels();

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
