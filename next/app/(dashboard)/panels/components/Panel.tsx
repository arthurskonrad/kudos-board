import { PanelModelType } from "@/domain/models/Panel";
import Link from "next/link";

type PanelProps = {
  panel: PanelModelType;
};

export default function Panel({ panel }: PanelProps) {
  return (
    <Link href={`/panels/${panel.slug}`}>
      <li className="flex gap-4 p-8 mb-8 bg-green-50 shadow-md rounded-lg transition cursor-pointer">
        <ul>
          <li>
            <strong>title</strong>: {panel.title}
          </li>
          <li>
            <strong>description</strong>: {panel.description}
          </li>
          <li>
            <strong>slug</strong>: {panel.slug}
          </li>
          <li>
            <strong>owner</strong>: {panel.owner}
          </li>
          <li>
            <strong>createdAt</strong>: {panel.createdAt.toString()}
          </li>
          <li>
            <strong>updatedAt</strong>: {panel.updatedAt.toString()}
          </li>
          <li>
            <strong>password</strong>: {panel.password}
          </li>
          <li>
            <strong>clientPassword</strong>: {panel.clientPassword}
          </li>
          <li>
            <strong>status</strong>: {panel.status}
          </li>
        </ul>
      </li>
    </Link>
  );
}
