import { PanelModelType } from "@/domain/models/Panel";

type PanelProps = {
  panel: PanelModelType;
};

export default function Panel({ panel }: PanelProps) {
  return (
    <li
      key={panel.slug}
      className="flex gap-4 p-8 mb-8 bg-white shadow-md rounded-lg transition hover:shadow-lg hover:scale-[101%] cursor-pointer"
    >
      <ul>
        <li>
          <strong>title</strong>: {panel.title}
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
  );
}
