"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useKudos } from "@/app/hooks/useKudos";
import Kudo from "@/app/(dashboard)/kudos/components/Kudo";
import { KudosModelType } from "@/domain/models/Kudos";
import LoadingContainer from "@/app/ui/LoadingContainer";
import Loading from "@/app/ui/Loading";

export default function page() {
  const params = useParams();

  const panelSlug: string =
    typeof params.panelSlug === "object"
      ? params.panelSlug[0]
      : params.panelSlug;

  const kudoSlug: string =
    typeof params.kudoSlug === "object" ? params.kudoSlug[0] : params.kudoSlug;

  const { kudos, getKudo } = useKudos({ panelSlug, kudoSlug });

  if (kudos.length <= 0) {
    return (
      <LoadingContainer>
        <Loading size="lg" />
      </LoadingContainer>
    );
  }

  const kudo: KudosModelType | undefined = getKudo();

  if (!kudo) {
    return null;
  }

  return <Kudo kudo={kudo} />;
}
