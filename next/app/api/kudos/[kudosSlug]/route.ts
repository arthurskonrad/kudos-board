import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  return new Response(
    JSON.stringify({
      from: {
        name: "from name",
        id: "1",
      },
      to: "to name",
      title: "Kudos title",
      description: "Kudos description",
      slug: params.kudosSlug,
      panelSlug: "c0cccf49-f111-4df6-806c-7a43cc57803f",
      createdAt: new Date(),
      updatedAt: new Date(),
      status: "ACTIVE",
    })
  );
}

export async function PUT(request: NextRequest) {
  const kudos = await request.json();

  return new Response(JSON.stringify(kudos));
}
