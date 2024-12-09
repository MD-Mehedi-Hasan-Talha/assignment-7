import getTimeByLocal from "@/utils/getTimeByLocal";
import Play from "../Icons/Play";
import AdditionalVideo from "./AdditionalVideo";

export default function Video({ video, allVideos, lang, dict }) {
  return (
    <main className="flex flex-col lg:flex-row gap-6">
      <div className="lg:w-3/4">
        <div className="relative">
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}`}
            title={video.title}
            frameBorder="0"
            className="w-full aspect-video h-[500px]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <div className="flex items-center space-x-4">
              <button className="bg-color-gray hover:bg-opacity-80 rounded-full p-2">
                <Play />
              </button>
              <div className="bg-color-purple text-white px-2 py-1 rounded text-sm">
                {dict.videoCaptions.live}
              </div>
              <span className="text-sm">{getTimeByLocal("46:02", lang)}</span>
              <button className="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm">
                {dict.videoCaptions.donate}
              </button>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold mt-4">{video.title}</h1>
        <div className="flex items-center space-x-4 mt-2">
          <img
            src="/assets/avatar.png"
            alt="Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{video.channelTitle}</p>
          </div>
          <button className="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm ml-auto">
            {dict.subscribe}
          </button>
        </div>
      </div>

      <AdditionalVideo
        videos={allVideos}
        videoId={video.videoId}
        lang={lang}
        dict={dict}
      />
    </main>
  );
}
