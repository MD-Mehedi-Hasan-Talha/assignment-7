import getVideos from "@/data/getVideos";
import { getDictionaries } from "@/utils/getDictionaries";
import getRandomVideo from "@/utils/getRandomVideo";
import Hero from "../Components/Hero/Hero";
import Streams from "../Components/Streams/Streams";

export default async function HomePage({ params }) {
  const { lang } = params;
  const videos = await getVideos();

  const randomVideo = getRandomVideo(videos, 1)[0];

  const dict = await getDictionaries(lang);

  return (
    <>
      <Hero video={randomVideo} dict={dict} lang={lang} />
      <Streams videos={videos} lang={lang} dict={dict} />
    </>
  );
}
