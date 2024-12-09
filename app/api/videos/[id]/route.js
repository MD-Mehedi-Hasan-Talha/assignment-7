import videos from "@/data/videos.json";
import { NextResponse } from "next/server";

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
    const videoIndex = videos.findIndex((video) => video.videoId === id);

    if (!videoIndex) {
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

    videos[videoIndex].title = title || videos[videoIndex].title;
    videos[videoIndex].description =
      description || videos[videoIndex].description;

    return NextResponse.json(videos[videoIndex]);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "An error occurred while updating the video!",
      error,
    });
  }
}

export async function DELETE(_req, { params }) {
  try {
    const { id } = params;
    const videoIndex = videos.findIndex((video) => video.videoId === id);

    if (!videoIndex) {
      return NextResponse.json(
        {
          message: `This video with '${id}' id was not found!`,
        },
        {
          status: 404,
        }
      );
    }

    const videoToDelete = videos[videoIndex];

    videos.splice(videos[videoIndex], 1);

    return NextResponse.json(videoToDelete);
  } catch (error) {
    return NextResponse.json({
      message: "An error occurred while deleting the video!",
      error,
    });
  }
}
