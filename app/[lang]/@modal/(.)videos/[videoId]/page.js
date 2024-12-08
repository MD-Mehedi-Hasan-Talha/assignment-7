import Modal from "@/app/Components/Modal/Modal";
import Video from "@/app/Components/Video/Video";
import getVideos from "@/data/getVideos";

export default async function VideoPage({ params: { lang, videoId } }) {
  const videos = await getVideos();
  const currentVideo = videos.find((video) => video.videoId === videoId);

  return (
    <Modal>
      <Video video={currentVideo} allVideos={videos} />
    </Modal>
  );
}
