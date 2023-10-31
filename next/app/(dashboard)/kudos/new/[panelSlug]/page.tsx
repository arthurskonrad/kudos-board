"use client";

import React from "react";

import Form from "@/app/(dashboard)/kudos/components/Form";
import { UseKudos } from "@/app/hooks/UseKudos";

export default function page({ params }: any) {
  const { createKudos } = UseKudos();

  return (
    <div>
      <Form createKudos={createKudos} panelSlug={params.panelSlug} />
    </div>
  );
}
