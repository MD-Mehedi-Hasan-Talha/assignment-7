import Video from "@/app/Components/VideoServer/Video";
import getVideos from "@/data/getVideos";
import { getDictionaries } from "@/utils/getDictionaries";
import { notFound } from "next/navigation";

export default async function VideoPage({ params: { lang, videoId } }) {
  const videos = await getVideos();
  const currentVideo = videos.find((video) => video.videoId === videoId);

  if (!currentVideo) {
    notFound();
  }

  const dict = await getDictionaries(lang);

  return (
    <Video video={currentVideo} allVideos={videos} lang={lang} dict={dict} />
  );
}
