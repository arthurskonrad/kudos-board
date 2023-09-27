"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useKudos } from "@/app/hooks/useKudos";
import Kudos from "@/app/(dashboard)/kudos/components/Kudos";

export default function page() {
  const params = useParams();

  const panelSlug: string =
    typeof params.panelSlug === "object"
      ? params.panelSlug[0]
      : params.panelSlug;

  const { kudos } = useKudos({ panelSlug });

  return <Kudos kudos={kudos} panelSlug={panelSlug} />;
}
