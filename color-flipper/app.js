const colors = ["green", "red", "#f15025", "rgba(133,122,200,0.9)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
	const randomNum = getRandomNumber();
	document.body.style.backgroundColor = colors[randomNum];
	color.textContent = colors[randomNum];
});

const getRandomNumber = () => {
	const randomNum = Math.floor(Math.random() * colors.length);
	return randomNum;
};
