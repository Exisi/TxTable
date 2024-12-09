(function () {
	"use strict";
	/* base setting */
	const baseSettingBtn = document.getElementsByClassName("setting-base")[0];
	baseSettingBtn.addEventListener("click", (e) => {
		const target = e.target;
		if (target.className == "reset") {
			const box = document.querySelectorAll(".input, .output, .source");
			box.forEach((e) => {
				e.value = "";
				e.innerHTML = "";
			});
		}

		if (target.className == "copy") {
			const source = document.getElementsByClassName("source")[0];
			const text = source.value;
			if (text != "" && text != null) {
				navigator.clipboard.writeText(text);
			}
		}
	});

	/* advanced setting */
	const confirmBtn = document.querySelectorAll(".confirm-btn")[0];
	const option = document.getElementsByClassName("setting")[0].getElementsByClassName("left")[0];
	const dialog = document.getElementsByClassName("setting-advanced")[0];
	option.addEventListener("click", () => {
		read();
	});
	confirmBtn.addEventListener("click", () => {
		save();
		dialog.close();
	});

	function save() {
		const rule = {
			split: document.querySelectorAll(".rule.split")[0].value,
			regex: document.querySelectorAll(".rule.regex")[0].checked,
			pre_suf_blank: document.querySelectorAll(".rule.pre-suf-blank")[0].checked,
			blank_row: document.querySelectorAll(".rule.blank-row")[0].checked,
		};

		localStorage.setItem("split", rule.split);
		localStorage.setItem("regex", rule.regex);
		localStorage.setItem("pre_suf_blank", rule.pre_suf_blank);
		localStorage.setItem("blank_row", rule.blank_row);
	}

	function read() {
		const ruleSetting = {
			split: document.querySelectorAll(".rule.split")[0],
			regex: document.querySelectorAll(".rule.regex")[0],
			blank_row: document.querySelectorAll(".rule.blank-row")[0],
			pre_suf_blank: document.querySelectorAll(".rule.pre-suf-blank")[0],
		};
		const ruleSaving = {
			split: localStorage.getItem("split") ?? " ",
			regex: localStorage.getItem("regex") ?? false,
			blank_row: localStorage.getItem("blank_row") ?? false,
			pre_suf_blank: localStorage.getItem("pre_suf_blank") ?? false,
		};

		Object.keys(ruleSetting).forEach((key) => {
			if (["regex", "pre_suf_blank", "blank_row"].includes(key)) {
				ruleSetting[key].checked = ruleSaving[key] == "true" ? true : false;
			} else {
				ruleSetting[key].value = ruleSaving[key];
				console.log(ruleSaving[key]);
			}
		});
	}
})();
