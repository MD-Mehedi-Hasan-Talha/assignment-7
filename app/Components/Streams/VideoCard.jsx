import Image from "next/image";
import Link from "next/link";

export default function Video({ video, lang }) {
  return (
    <Link
      href={`/${lang}/videos/${video.videoId}`}
      className="rounded-lg overflow-hidden bg-color-gray"
    >
      <Image
        width={300}
        height={200}
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-2">
        <p className="font-semibold">{video.title}</p>
        <p className="text-sm text-gray-400">{video.channelTitle}</p>
      </div>
    </Link>
  );
}
