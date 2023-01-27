(function () {
	"use strict";
	/* base setting */
	let base = document.getElementsByClassName("setting-base")[0];
	base.addEventListener("click", (e) => {
		let target = e.target;
		if (target.className == "reset") clean();
		if (target.className == "copy") copySource(target);
	});

	function copySource(target) {
		let source = document.getElementsByClassName("source")[0];
		copy(source.value);
	}

	function copy(text) {
		if (text != "" && text != null) {
			navigator.clipboard.writeText(text);
		}
	}

	function clean() {
		let box = document.querySelectorAll(".input, .output, .source");
		box.forEach((e) => {
			e.value = "";
			e.innerHTML = "";
		});
	}

	/* advanced setting */
	let ensure = document.querySelectorAll(".ensure")[0];
	let option = document.getElementsByClassName("setting")[0].getElementsByClassName("left")[0];
	let dialog = document.getElementsByClassName("setting-advanced")[0];
	option.addEventListener("click", () => {
		read();
	});
	ensure.addEventListener("click", () => {
		save();
		dialog.close();
	});
	save();

	function save() {
		let rule = {
			split: document.querySelectorAll(".rule.split")[0].value,
			regex: document.querySelectorAll(".rule.regex")[0].checked,
			pre_suf_blank: document.querySelectorAll(".rule.pre-suf-blank")[0].checked,
			blank_row: document.querySelectorAll(".rule.blank-row")[0].checked,
		};
		sessionStorage.setItem("split", rule.split);
		sessionStorage.setItem("regex", rule.regex);
		sessionStorage.setItem("pre_suf_blank", rule.pre_suf_blank);
		sessionStorage.setItem("blank_row", rule.blank_row);
	}

	function read() {
		let rule_set = {
			split: document.querySelectorAll(".rule.split")[0],
			regex: document.querySelectorAll(".rule.regex")[0],
			blank_row: document.querySelectorAll(".rule.blank-row")[0],
			pre_suf_blank: document.querySelectorAll(".rule.pre-suf-blank")[0],
		};
		let rule_save = {
			split: sessionStorage.getItem("split"),
			regex: sessionStorage.getItem("regex"),
			blank_row: sessionStorage.getItem("blank_row"),
			pre_suf_blank: sessionStorage.getItem("pre_suf_blank"),
		};
		rule_set.split.value = rule_save.split;
		rule_set.regex.checked = rule_save.regex == "true" ? true : false;
		rule_set.pre_suf_blank.checked = rule_save.pre_suf_blank == "true" ? true : false;
		rule_set.blank_row.checked = rule_save.blank_row == "true" ? true : false;
	}
})();
