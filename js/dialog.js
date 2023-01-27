(function () {
	"use strict";
	let option = document.getElementsByClassName("setting")[0].getElementsByClassName("left")[0];
	let dialog = document.getElementsByClassName("setting-advanced")[0];
	let close = {
		0: document.getElementsByClassName("dialog-close")[0],
		1: document.getElementsByClassName("dialog-close")[0],
		2: document.getElementsByClassName("close")[0],
		3: document.getElementsByClassName("dialog-box")[0],
	};

	option.addEventListener("click", (e) => {
		dialog.showModal();
	});

	for (const i in close) {
		close[i].addEventListener("click", (e) => {
			if (i == 3 && e.target.className == "dialog-box setting-advanced") {
				dialog.close();
			}
			if (i != 3) dialog.close();
		});
	}
})();
