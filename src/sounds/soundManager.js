export function soundManager (event) {
	const audio = new Audio();
	audio.src = `/${event}.mp3`;
	audio.play();
}
