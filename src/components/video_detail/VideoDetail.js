import React from "react";
import styles from "./VideoDetail.module.css";

const VideoDetail = ({ video }) => <h1>{video.snippet.title}</h1>;

export default VideoDetail;
