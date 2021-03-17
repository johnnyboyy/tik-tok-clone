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
				src="https://v19-us.tiktokcdn.com/aa1f709f23b7d1d0d9147495feeee5e0/6052a2e3/video/tos/useast2a/tos-useast2a-pve-0068/0efa438832e64c4098e3f047c2c94a47/?a=1233&br=3190&bt=1595&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202103171846060101902091022A32ACA6&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amVoZmdmcGhoeTMzNzczM0ApO2hmZjtkZDs1N2dnODc5ZWdqbTRrLWYwLWZfLS0tMTZzc14vYTM2X2JhMjZgYC82Yi06Yw%3D%3D&vl=&vr="
				ref={videoRef}
				onClick={onVideoPress}></video>
		</div>
	);
};

export default Video;
