import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  return new Response(
    JSON.stringify({
      title: "First Panel",
      description: "First Panel Description",
      slug: params.panelSlug,
      owner: request.headers.get("user-id"),
      createdAt: new Date(),
      updatedAt: new Date(),
      password: "12345678",
      clientPassword: "12345678",
      status: "ACTIVE",
    })
  );
}

export async function PUT(request: NextRequest) {
  const panel = await request.json();

  return new Response(JSON.stringify(panel));
}
