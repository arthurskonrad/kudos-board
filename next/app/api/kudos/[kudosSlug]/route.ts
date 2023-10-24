import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  return new Response(
    JSON.stringify({
      from: {
        name: "from name",
        id: "1",
      },
      to: {
        name: "to name",
        id: "2",
      },
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
