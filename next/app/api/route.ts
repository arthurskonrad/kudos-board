import { randomUUID } from "crypto";

export async function GET(request: Request) {
  return new Response(
    JSON.stringify({
      panel: [
        {
          title: "First Panel",
          slug: randomUUID(),
          owner: request.headers.get("user-id"),
          createdAt: new Date(),
          updatedAt: new Date(),
          password: "12345678",
          clientPassword: "12345678",
          status: "ACTIVE",
        },
      ],
    })
  );
}

export async function POST(request: Request) {
  const panel = await request.json();

  panel.slug = randomUUID();
  panel.owner = request.headers.get("user-id")

  return new Response(JSON.stringify(panel));
}
