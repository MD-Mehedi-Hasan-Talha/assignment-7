import getTimeByLocal from "@/utils/getTimeByLocal";

export default function Hero({ video, dict, lang }) {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
      <div className="lg:col-span-2">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          {dict.heroAreaHeading1}
          <br />
          {dict.heroAreaHeading2}
          <br />
          {dict.heroAreaHeading3}
        </h1>
        <p className="text-gray-400 mb-8">{dict.heroAreaDescription}</p>
      </div>
      <div className="lg:col-span-2">
        <div className="relative rounded-lg overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}`}
            title={video.title}
            frameBorder="0"
            className="w-full aspect-video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
            <div className="text-right">
              <span className="bg-color-purple text-white px-2 py-1 rounded text-sm">
                {dict.videoCaptions.comingSoon}
              </span>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                {getTimeByLocal("04:03", lang)}
              </div>{" "}
              <p className="text-sm">{dict.videoCaptions.schedule}</p>
            </div>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-400">{video.title}</p>
      </div>
    </main>
  );
}
