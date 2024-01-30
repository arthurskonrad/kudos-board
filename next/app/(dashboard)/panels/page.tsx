import Panels from "@/app/(dashboard)/panels/components/Panels";
import { UsePanels } from "@/app/hooks/UsePanels";
import Anchor from "@/app/ui/Anchor";
import Loading from "@/app/ui/Loading";
import LoadingContainer from "@/app/ui/LoadingContainer";

export default async function page() {
  const { getPanels } = UsePanels();

  const panels = await getPanels();

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
