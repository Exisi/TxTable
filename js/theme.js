(function () {
	"use strict";
	let global = {
		HTML: {
			primary: "#51cf8e",
			secondary: "#7ae4ad",
		},
		Markdown: {
			primary: "#cfbaff",
			secondary: "#d7c6ff",
		},
	};

	let options = document.getElementsByClassName("option");
	for (const i in options) {
		if (!options[i].nodeType > 0) continue;
		options[i].addEventListener("click", (e) => {
			let name = options[i].getElementsByClassName("model-switch")[0].getAttribute("value");
			setThemeColor(name);
			checkFunc(name);
		});
	}

	function setThemeColor(name) {
		document.body.style.setProperty("--primary-color", global[name].primary);
		document.body.style.setProperty("--secondary-color", global[name].secondary);
	}

	function checkFunc(name) {
		let checkbox = document.getElementsByClassName("model-switch");
		for (const i in checkbox) {
			if (!checkbox[i].nodeType > 0) continue;
			let current_name = checkbox[i].getAttribute("value");
			checkbox[i].removeAttribute("checked");

			if (current_name != name) continue;
			checkbox[i].setAttribute("checked", "checked");
		}
	}
})();
