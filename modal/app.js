const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");

// adding to the modal class list a new class, it's open-modal
// it's assigned in style.css file

modalBtn.addEventListener("click", function () {
	modalOverlay.classList.toggle("open-modal");
});
closeBtn.addEventListener("click", function () {
	modalOverlay.classList.toggle("open-modal");
});
