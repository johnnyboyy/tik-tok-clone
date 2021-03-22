import React, { useRef, useState } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import styles from "../styles/Video.module.css";

import VideoSidebar from "./VideoSidebar";
import VideoFooter from "./VideoFooter";

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

	return { playing, videoRef, onVideoPress };
};

const Video = ({ video: { messages, url, likes, shares, description, channel, song } }) => {
	const { playing, videoRef, onVideoPress } = usePlayableVideo();

	return (
		<div className={styles.video}>
			{!playing && (
				<div className={styles.playButton}>
					<PlayArrowIcon />
				</div>
			)}
			<video className={styles.videoPlayer} src={url} ref={videoRef} onClick={onVideoPress}></video>
			<VideoSidebar likes={likes} shares={shares} messages={messages} />
			<VideoFooter description={description} channel={channel} song={song} />
		</div>
	);
};

export default Video;
