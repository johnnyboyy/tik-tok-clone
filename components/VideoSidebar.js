import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import styles from "../styles/VideoSidebar.module.css";
import { StayCurrentLandscapeSharp } from "@material-ui/icons";

const useLikes = () => {
	const [likes, setLikes] = React.useState(300);
	const [liked, setLiked] = React.useState(false);

	const likeVideo = React.useCallback(() => {
		if (!liked) {
			setLikes(likes + 1);
			setLiked(true);
		} else {
			setLikes(likes - 1);
			setLiked(false);
		}
	});

	return { likes, liked, likeVideo };
};

const VideoSidebar = () => {
	const { likes, liked, likeVideo } = useLikes();

	return (
		<div className={styles.sidebar}>
			<div className={styles.button}>
				<FavoriteIcon
					fontSize="large"
					onClick={likeVideo}
					className={liked ? styles.highlight : undefined}
				/>
				<p className={styles.amount}>{likes}</p>
			</div>
			<div className={styles.button}>
				<MessageIcon fontSize="large" />
				<p className={styles.amount}>300</p>
			</div>
			<div className={styles.button}>
				<ShareIcon fontSize="large" />
				<p className={styles.amount}>300</p>
			</div>
		</div>
	);
};

export default VideoSidebar;
