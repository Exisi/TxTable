(function () {
	"use strict";
	const global = {
		HTML: {
			primary: "#51cf8e",
			secondary: "#7ae4ad",
		},
		Markdown: {
			primary: "#cfbaff",
			secondary: "#d7c6ff",
		},
	};

	const options = document.getElementsByClassName("option");
	for (const func of options) {
		if (!func.nodeType > 0) {
			continue;
		}
		func.addEventListener("click", (e) => {
			const name = func.getElementsByClassName("model-switch")[0].getAttribute("value");
			setThemeColor(name);
			checkFunc(name);
		});
	}

	function setThemeColor(name) {
		document.body.style.setProperty("--primary-color", global[name].primary);
		document.body.style.setProperty("--secondary-color", global[name].secondary);
	}

	function checkFunc(name) {
		const checkbox = document.getElementsByClassName("model-switch");
		for (const i in checkbox) {
			if (!checkbox[i].nodeType > 0) {
				continue;
			}

			const current_name = checkbox[i].getAttribute("value");
			checkbox[i].removeAttribute("checked");

			if (current_name != name) {
				continue;
			}
			checkbox[i].setAttribute("checked", "checked");
		}
	}
})();
