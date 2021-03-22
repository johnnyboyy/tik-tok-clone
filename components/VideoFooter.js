import React from "react";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
import styles from "../styles/VideoFooter.module.css";

const VideoFooter = ({ channel, description, song }) => {
	return (
		<div className={styles.footer}>
			<div className={styles.text}>
				<h3>@{channel}</h3>
				<p>{description}</p>
				<div className={styles.tickerWrap}>
					<MusicNoteIcon className={styles.icon} />
					<div className={styles.ticker}>
						<Ticker mode="smooth">{() => <p>{song}</p>}</Ticker>
					</div>
				</div>
			</div>
			<img
				className={styles.record}
				src="https://static.thenounproject.com/png/934821-200.png"
				alt=""
			/>
		</div>
	);
};

export default VideoFooter;
