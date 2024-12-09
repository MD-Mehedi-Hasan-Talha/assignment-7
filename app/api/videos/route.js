import videos from "@/data/videos.json";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(videos);
}
