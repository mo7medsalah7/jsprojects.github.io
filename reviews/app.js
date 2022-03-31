const reviews = [
	{
		id: 1,
		name: "john doe",
		job: "web dev",
		img: "person-one",
		text: "One Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto saepe repellendus, expedita non nemo rem recusandae. Vitae nesciunt perferendis reiciendis.",
	},
	{
		id: 2,
		name: "Sara o",
		job: "graphic designer",
		img: "person-two",
		text: "Two Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto saepe repellendus, expedita non nemo rem recusandae. Vitae nesciunt perferendis reiciendis.",
	},
	{
		id: 3,
		name: "Max Well",
		job: "devops engineer",
		img: "person-one",
		text: "Three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto saepe repellendus, expedita non nemo rem recusandae. Vitae nesciunt perferendis reiciendis.",
	},
];

const author = document.getElementById("author");
const job = document.getElementById("job");
const img = document.getElementById("person-img");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// Load initial Item
window.addEventListener("DOMContentLoaded", function () {
	showPerson(currentItem);
});

function showPerson() {
	const item = reviews[currentItem];
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
	currentItem++;
	if (currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showPerson();
});
prevBtn.addEventListener("click", function () {
	currentItem--;
	if (currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	showPerson();
});

randomBtn.addEventListener("click", function () {
	currentItem = Math.floor(Math.random() * reviews.length);
	showPerson();
});
