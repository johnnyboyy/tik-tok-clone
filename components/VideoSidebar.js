import React, { useState, useCallback } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import styles from "../styles/VideoSidebar.module.css";

const useLikes = ({ existingLikes }) => {
	const [likes, setLikes] = useState(existingLikes);
	const [liked, setLiked] = useState(false);

	const likeVideo = useCallback(() => {
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

const VideoSidebar = ({
	likes: existingLikes,
	shares: existingShares,
	messages: existingMessages,
}) => {
	const { likes, liked, likeVideo } = useLikes({ existingLikes });

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
				<p className={styles.amount}>{existingMessages}</p>
			</div>
			<div className={styles.button}>
				<ShareIcon fontSize="large" />
				<p className={styles.amount}>{existingShares}</p>
			</div>
		</div>
	);
};

export default VideoSidebar;
