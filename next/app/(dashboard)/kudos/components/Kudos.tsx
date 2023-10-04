import React from "react";
import { KudosModelType } from "@/domain/models/Kudos";
import KudoLink from "@/app/(dashboard)/kudos/components/KudoLink";

type KudosProps = {
  kudos: KudosModelType[];
  panelSlug: string;
};

export default function Kudos({ kudos, panelSlug }: KudosProps) {
  return (
    <div>
      {kudos.map((kudo) => (
        <KudoLink kudo={kudo} panelSlug={panelSlug} key={kudo.slug} />
      ))}
    </div>
  );
}
