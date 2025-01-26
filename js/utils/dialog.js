const option = document.getElementsByClassName("setting")[0].getElementsByClassName("left")[0];
const dialog = document.getElementsByClassName("setting-advanced")[0];
const closeBtns = {
	0: document.getElementsByClassName("dialog-close")[0],
	1: document.getElementsByClassName("close-btn")[0],
	2: document.getElementsByClassName("dialog-box")[0],
};

Array.from(Object.keys(closeBtns)).forEach((key) => {
	closeBtns[key].addEventListener("click", (e) => {
		if (key == 2 && e.target.className == "dialog-box setting-advanced") {
			dialog.close();
		}
		if (key != 2) {
			dialog.close();
		}
	});
});

option.addEventListener("click", (e) => dialog.showModal());
