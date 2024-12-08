const getVideos = async () => {
  const videos = await import("./videos.json");
  return videos.default;
};
export default getVideos;
