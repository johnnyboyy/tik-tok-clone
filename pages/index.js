import React, { useState, useEffect } from "react";
import Video from "../components/Video";
import styles from "../styles/Home.module.css";
import { db } from "../utils/firebase";

const useVideos = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		db.collection("videos").onSnapshot((snapshot) =>
			setVideos(snapshot.docs.map((doc) => doc.data()))
		);
	}, []);

	return { videos };
};

const Home = () => {
	const { videos } = useVideos();

	return (
		<div className={styles.container}>
			<div className={styles.window}>
				<div className={styles.inner}>
					{videos.map((video, index) => {
						return (
							<div className={styles.item} key={index}>
								<Video video={video} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default Home;
