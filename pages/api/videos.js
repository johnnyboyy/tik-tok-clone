export default (_req, res) => {
	res.statusCode = 200;

	res.json({
		videos: new Array(5).fill("").map((_empty, index) => {
			return `/videos/tiktok0${index + 1}.mp4`;
		}),
	});
};
