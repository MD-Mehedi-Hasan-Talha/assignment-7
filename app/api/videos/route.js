import videos from "@/data/videoForApi.json";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(videos);
}
