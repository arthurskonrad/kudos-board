import React from "react";
import KudosModel from "@/domain/models/Kudos";

type KudoProps = {
  kudo: KudosModel;
};

export default function Kudo({ kudo }: KudoProps) {
  return (
    <li className="flex gap-4 p-8 mb-8 bg-white shadow-md rounded-lg transition cursor-pointer">
      <ul>
        <li>
          <strong>title</strong>: {kudo.title}
        </li>
        <li>
          <strong>description</strong>: {kudo.description}
        </li>
        <li>
          <strong>slug</strong>: {kudo.slug}
        </li>
        <li>
          <strong>from</strong>: {kudo.from.name}
        </li>
        <li>
          <strong>to</strong>: {kudo.to.name}
        </li>
        <li>
          <strong>createdAt</strong>: {kudo.createdAt.toString()}
        </li>
        <li>
          <strong>updatedAt</strong>: {kudo.updatedAt.toString()}
        </li>
        <li>
          <strong>status</strong>: {kudo.status}
        </li>
      </ul>
    </li>
  );
}
