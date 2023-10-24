import React from "react";
import { KudosModelType } from "@/domain/models/Kudos";
import Link from "next/link";

type KudoLinkProps = {
  kudo: KudosModelType;
};

export default function KudoLink({ kudo }: KudoLinkProps) {
  return (
    <Link href={`/kudos/${kudo.slug}}`}>
      <li
        key={kudo.slug}
        className="flex gap-4 p-8 mb-8 bg-white shadow-md rounded-lg transition cursor-pointer"
      >
        <ul>
          <li>
            <strong>title</strong>: {kudo.title}
          </li>
          <li>
            <strong>description</strong>: {kudo.description}
          </li>
        </ul>
      </li>
    </Link>
  );
}
