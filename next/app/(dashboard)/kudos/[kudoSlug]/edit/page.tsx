"use client";

import React from "react";
import EditKudos from "@/app/(dashboard)/kudos/components/EditKudos";
import UseAuth from "@/app/hooks/UseAuth";
import { UseKudos } from "@/app/hooks/UseKudos";

export default async function page({ params }: any) {
  const { getUser } = UseAuth();

  const { userId } = getUser();

  const { findBySlug, updateKudos } = UseKudos();

  const kudos = await findBySlug({ kudoSlug: params.kudoSlug, userId });

  if (!kudos) {
    return null;
  }

  return (
    <div>
      <h1>Edição do kudos {kudos.title}</h1>

      <EditKudos updateKudos={updateKudos} kudos={kudos} />
    </div>
  );
}
