import Modal from "@/app/Components/Modal/Modal";
import Video from "@/app/Components/VideoClient/Video";
import getVideos from "@/data/getVideos";
import { getDictionaries } from "@/utils/getDictionaries";

export default async function VideoPage({ params: { lang, videoId } }) {
  const videos = await getVideos();
  const currentVideo = videos.find((video) => video.videoId === videoId);

  if (!currentVideo) {
    notFound();
  }

  const dict = await getDictionaries(lang);

  return (
    <Modal>
      <Video video={currentVideo} allVideos={videos} lang={lang} dict={dict} />
    </Modal>
  );
}
