import React, { useRef, useState } from "react";
import styles from "../styles/Video.module.css";
import VideoSidebar from "./VideoSidebar";

const usePlayableVideo = () => {
	const [playing, setPlaying] = useState(false);
	const videoRef = useRef(null);

	const onVideoPress = () => {
		if (playing) {
			videoRef.current.pause();
			setPlaying(false);
		} else {
			videoRef.current.play();
			setPlaying(true);
		}
	};

	return { videoRef, onVideoPress };
};

const Video = ({ video: { messages, url, likes, shares, description, channel, song } }) => {
	const { videoRef, onVideoPress } = usePlayableVideo();

	return (
		<div className={styles.video}>
			<video className={styles.videoPlayer} src={url} ref={videoRef} onClick={onVideoPress}></video>
			<VideoSidebar likes={likes} shares={shares} messages={messages} />
		</div>
	);
};

export default Video;
