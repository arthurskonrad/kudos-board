import { randomUUID } from "crypto";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const kudos = await request.json();

  kudos.slug = randomUUID();
  kudos.owner = request.headers.get("user-id");

  return new Response(JSON.stringify(kudos));
}
