import React, { useRef, useState } from "react";
import styles from "../styles/Video.module.css";

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

const Video = () => {
	const { videoRef, onVideoPress } = usePlayableVideo();

	return (
		<div className={styles.video}>
			<video
				className={styles.videoPlayer}
				src="/videos/tiktok01.mp4"
				ref={videoRef}
				onClick={onVideoPress}></video>
		</div>
	);
};

export default Video;
