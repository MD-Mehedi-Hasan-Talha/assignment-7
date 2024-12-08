"use client";

import goToRoute from "@/utils/goToRoute";
import truncateString from "@/utils/truncateString";
import Image from "next/image";

export default function AdditionalVideo({ videos, videoId }) {
  return (
    <div className="lg:w-1/4">
      <h2 className="text-xl font-semibold mb-4">You may like</h2>
      <div className="space-y-4">
        {videos
          .filter((video) => video.videoId !== videoId)
          .map((video) => (
            <div
              onClick={() => goToRoute(video.videoId)}
              key={video.videoId}
              className="flex items-start space-x-4 cursor-pointer"
            >
              <Image
                width={100}
                height={80}
                src={video.thumbnail}
                alt={video.title}
                className="w-30 h-20 rounded object-cover"
              />
              <div>
                <h3 className="font-semibold">
                  {truncateString(video.title, 50)}
                </h3>
                <p className="text-sm text-gray-400">{video.channelTitle}</p>
                <p className="text-sm text-gray-400">26,389M</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
