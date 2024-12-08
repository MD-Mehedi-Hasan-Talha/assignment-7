import getVideos from "@/data/getVideos";
import getRandomVideo from "@/utils/getRandomVideo";
import Hero from "../Components/Hero/Hero";
import Streams from "../Components/Streams/Streams";

export default async function HomePage({ params }) {
  const { lang } = params;
  const videos = await getVideos();

  const randomVideo = getRandomVideo(videos, 1)[0];

  return (
    <>
      <Hero video={randomVideo} />
      <Streams videos={videos} lang={lang} />
    </>
  );
}
