let count = 0;
const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

btns.forEach(function (btn) {
	btn.addEventListener("click", function (e) {
		const styles = e.currentTarget.classList;
		if (styles.contains("decrease")) {
			count--;
			value.textContent = count;
		} else if (styles.contains("increase")) {
			count++;
			value.textContent = count;
		} else {
			count = 0;
			value.textContent = 0;
		}

		if (count > 0) {
			value.style.color = "#244bd9";
		}
		if (count < 0) {
			value.style.color = "#ddd";
		}
		if (count === 0) {
			value.style.color = "#b12f2f";
		}
	});
});
