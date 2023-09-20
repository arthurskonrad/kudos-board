"use client";

import { useRouter } from "next/navigation";
import Panels from "@/app/panels/components/Panels";
import { usePanels } from "@/app/panels/hooks/usePanels";
import Button from "../ui/Button";

export default function page() {
  const { panels } = usePanels();

  const router = useRouter();

  const redirect = () => {
    router.push("/panels/new");
  };

  return (
    <div>
      <div className="mb-4">
        <Button onClick={redirect}>Criar Painel</Button>
      </div>

      <Panels panels={panels} />
    </div>
  );
}
