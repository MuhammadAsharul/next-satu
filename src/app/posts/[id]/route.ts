import { NextRequest, NextResponse } from "next/server";
import { posts } from "../data";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  //   console.log(params);
  const post = posts.find((p) => p.id === parseInt(params.id));
  return NextResponse.json(post);
}
