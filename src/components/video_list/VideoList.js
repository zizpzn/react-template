import React from "react";
import VideoItem from "../video_item/VideoItem";
import styles from "./VideoList.module.css";

const VideoList = ({ videos, onVideoClick }) => (
  <ul className={styles.videos}>
    {videos.map((video) => (
      <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} />
    ))}
  </ul>
);

export default VideoList;
