export default function getRandomVideo(videos, num) {
  // Create a copy of the videos array to prevent modification of the original array
  const videosCopy = [...videos];

  // Result array to store selected videos
  const selectedVideos = [];

  // Randomly select 'num' videos
  for (let i = 0; i < num; i++) {
    const randomIndex = Math.floor(Math.random() * videosCopy.length);
    selectedVideos.push(videosCopy[randomIndex]);

    // Remove the selected video from the copy array to avoid selecting the same one again
    videosCopy.splice(randomIndex, 1);
  }

  return selectedVideos;
}
