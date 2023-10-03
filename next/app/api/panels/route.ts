import { NextRequest } from "next/server";
import { randomUUID } from "crypto";

import { panelsMock } from "@/app/api/panels/mock";

export async function GET(request: NextRequest) {
  return new Response(
    JSON.stringify({
      panel: [
        {
          title: "First Panel",
          description: "First Panel Description",
          slug: "838e9285-b7fe-4dd5-8f21-5d84868c0c4c",
          owner: request.headers.get("user-id"),
          createdAt: new Date(),
          updatedAt: new Date(),
          password: "12345678",
          clientPassword: "12345678",
          status: "ACTIVE",
        },
        ...panelsMock,
      ],
    })
  );
}

export async function POST(request: NextRequest) {
  const panel = await request.json();

  panel.slug = randomUUID();
  panel.owner = request.headers.get("user-id");

  return new Response(JSON.stringify(panel));
}
