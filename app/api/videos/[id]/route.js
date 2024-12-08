import videos from "@/data/videoForApi.json";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export function GET(_req, { params }) {
  const { id } = params;
  const videoById = videos.find((video) => video.videoId === id);

  if (!videoById) {
    return NextResponse.json(
      {
        message: `This video with '${id}' id was not found!`,
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(videoById);
}

export async function PATCH(req, { params }) {
  try {
    const body = await req.json();

    const allowedKeys = ["title", "description"];
    const keys = Object.keys(body);
    // Check if there are any keys other than 'title' and 'description'
    const invalidKeys = keys.filter((key) => !allowedKeys.includes(key));
    if (invalidKeys.length > 0) {
      const invalidKeysText = invalidKeys.join(" or ");
      return NextResponse.json(
        {
          message: `You can't provide '${invalidKeysText}' property!`,
        },
        {
          status: 400,
        }
      );
    }

    const { id } = params;
    const videoById = videos.find((video) => video.videoId === id);

    if (!videoById) {
      return NextResponse.json(
        {
          message: `This video with '${id}' id was not found!`,
        },
        {
          status: 404,
        }
      );
    }

    const { title, description } = body;

    if (!title && !description) {
      return NextResponse.json(
        {
          message: "You need to provide 'title' or 'description' property!",
        },
        {
          status: 400,
        }
      );
    }

    const nextData = {
      ...videoById,
      title: title || videoById.title,
      description: description || videoById.description,
    };

    const fileData = videos.map((video) =>
      video.videoId === id ? nextData : video
    );

    const dbFilePath = path.join(process.cwd(), "/data/videoForApi.json");
    fs.writeFileSync(dbFilePath, JSON.stringify(fileData));

    return NextResponse.json(nextData);
  } catch (error) {
    return NextResponse.json({
      message: "An error occurred while updating the video!",
      error,
    });
  }
}

export async function DELETE(_req, { params }) {
  try {
    const { id } = params;
    const videoById = videos.find((video) => video.videoId === id);

    if (!videoById) {
      return NextResponse.json(
        {
          message: `This video with '${id}' id was not found!`,
        },
        {
          status: 404,
        }
      );
    }

    const fileData = videos.filter((video) => video.videoId !== id);

    const pathUrl = path.join(process.cwd(), "/data/videoForApi.json");
    fs.writeFileSync(pathUrl, JSON.stringify(fileData));

    return NextResponse.json(videoById);
  } catch (error) {
    return NextResponse.json({
      message: "An error occurred while deleting the video!",
      error,
    });
  }
}
