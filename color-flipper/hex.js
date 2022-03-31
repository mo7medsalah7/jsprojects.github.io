const hexCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
	let hex = "#";

	// creating a string of 6 codes starting with # > #e435fa
	for (i = 0; i < 6; i++) {
		hex += hexCodes[getRandomNumber()];
	}
	document.body.style.backgroundColor = hex;
});

const getRandomNumber = () => {
	const randomNum = Math.floor(Math.random() * hexCodes.length);
	return randomNum;
};
