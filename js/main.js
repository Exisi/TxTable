(function () {
	"use strict";
	let timer;
	let DOM = {
		input: document.getElementsByClassName("input")[0],
		output: document.getElementsByClassName("output")[0],
		source: document.getElementsByClassName("source")[0],
		checkbox: document.getElementsByClassName("model-switch"),
		option: document.querySelectorAll(".option"),
	};
	let attr = {
		input: "",
		output: "",
		rule: getRule(),
		model: "HTML",
	};
	let model = {
		/* format function */
		HTML: () => {
			let list = textDeepIteration(attr.input, attr.rule.split);
			let output = textFormatWithHTML(list, attr.rule);
			return output;
		},
		Markdown: () => {
			let list = textDeepIteration(attr.input, attr.rule.split);
			let output = textFormatWithMarkdown(list, attr.rule);
			return output;
		},
	};

	/* text entry Event */
	DOM.input.addEventListener("keydown", () => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			attr.model = getModel(DOM.checkbox);
			attr.rule = getRule();

			attr.input = DOM.input.value;
			attr.output = model[attr.model]();
			setOutText(attr, DOM);
		}, 100);
	});
	DOM.option.forEach((e) => {
		e.addEventListener("click", () => {
			attr.model = e.querySelector("input").value;
			attr.rule = getRule();
			setOutText(attr, DOM);
		});
	});
	function getRule() {
		let rule = {
			split: localStorage.getItem("split") == "" ? " " : localStorage.getItem("split") ?? " ",
			regex: localStorage.getItem("regex"),
			blank_row: localStorage.getItem("blank_row"),
			pre_suf_blank: localStorage.getItem("pre_suf_blank"),
		};

		rule.split = rule.regex ? (rule.split = new RegExp(rule.split)) : rule.split;
		return rule;
	}

	function getModel(checkbox) {
		let model;
		for (const check of checkbox) {
			if (!check.nodeType > 0) continue;
			if (!check.checked) continue;
			model = check.getAttribute("value");
			console.log(model);
		}
		return model;
	}

	function setOutText(attr, DOM) {
		if (attr.input == "") {
			DOM.source.value = "";
			DOM.output.innerHTML = "";
			return;
		}

		attr.output = model[attr.model]();
		DOM.source.value = "";
		DOM.output.innerHTML = "";
		DOM.source.value = attr.output;
		if (attr.model == "Markdown") {
			attr.output = marked.parse(attr.output);
		}
		DOM.output.innerHTML = attr.output;
	}

	function textDeepIteration(input, split) {
		let str = {
			split: split,
			list: {
				by_row: input.split("\n"),
				by_row_split_word: [],
			},
		};
		for (const row of str.list.by_row) {
			let in_row_word_list = row.split(str.split);
			str.list.by_row_split_word.push(in_row_word_list);
		}
		return str.list.by_row_split_word;
	}

	function textFormatWithHTML(list, rule) {
		if (rule.blank_row == "true") {
			list = list.filter((item) => item[0] != "");
		}
		let attach = {
			head: {
				prefix: "<th>",
				suffix: "</th>",
			},
			body: {
				prefix: "<td>",
				suffix: "</td>",
			},
		};
		let type = "head";
		for (const i in list) {
			let row = list[i];
			if (i != 0) {
				type = "body";
			}
			let new_row = [];
			for (const word of row) {
				let word_new = word;
				if (rule.pre_suf_blank) {
					word_new = word_new.trim();
				}
				let word_with_html = attach[type].prefix + word_new + attach[type].suffix;
				new_row.push(word_with_html);
			}
			new_row.unshift("<tr>");
			new_row.push("</tr>");
			list[i] = new_row;
		}
		list.unshift("<table>");
		list.push("</table>");
		let text = restoreListToText(list);
		return text;
	}

	function textFormatWithMarkdown(list, rule) {
		if (rule.blank_row == "true") {
			list = list.filter((item) => item[0] != "");
		}
		let max_column = list[0].length;

		let arr = new Array(list.length).fill(0).map(() => new Array(2 * max_column + 1).fill("|"));
		for (const i in list) {
			for (const j in list[i]) {
				arr[i][2 * j + 1] = " " + list[i][j] + " ";
				if (rule.pre_suf_blank == "true") {
					arr[i][2 * j + 1] = " " + list[i][j].trim() + " ";
				}
			}
		}
		let separator = new Array(2 * max_column + 1).fill("|");
		for (const i in separator) {
			if (i % 2 != 0) separator[i] = " :---- ";
		}
		arr.splice(1, 0, separator);
		arr = arr.map((val) => {
			return val.join("");
		});
		return arr.join("\n");
	}

	function restoreListToText(list) {
		/* list flatten */
		let list_flatten = list.flat(Infinity);
		for (const i in list_flatten) {
			if (list_flatten[i] == "<tr>" || list_flatten[i] == "</tr>") {
				list_flatten[i] = "\t" + list_flatten[i];
			}
			if (list_flatten[i].search("<th>") >= 0 || list_flatten[i].search("<td>") >= 0) {
				list_flatten[i] = "\t\t" + list_flatten[i];
			}
		}
		return list_flatten.join("\n");
	}
})();
