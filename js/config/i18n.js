const translations = {
	en: {
		title: "Text to Table Tool",
		advancedOptions: "Advanced Options",
		copy: "Copy",
		reset: "Clear",
		format: "Format",
		separator: "Separator",
		comma: "Comma",
		semicolon: "semicolon",
		vertical_bar: "vertical bar",
		regex: "Regular Expression",
		optimize: "Optimize",
		preSufBlank: "Remove leading/trailing spaces",
		blankRow: "Remove blank lines",
		confirm: "Confirm",
		close: "Close",
	},
	zh: {
		title: "文本转表格工具",
		advancedOptions: "高级选项",
		copy: "复制",
		reset: "清空",
		format: "格式化",
		separator: "分隔符",
		separator_placeholder: "",
		comma: "逗号",
		semicolon: "分号",
		vertical_bar: "竖线",
		regex: "正则表达式",
		optimize: "优化",
		preSufBlank: "去除前后空格",
		blankRow: "移除空行",
		confirm: "确认",
		close: "关闭",
	},
};
const curLang = navigator.language == "zh-CN" ? "zh" : navigator.language;
const localeKeys = Object.keys(translations).includes(curLang) ? curLang : "en";
const lang = localStorage.getItem("locale") || curLang;

const localeOptions = document.getElementById("locale-options");
localeOptions.value = lang;
switchLanguage(lang);

localeOptions.addEventListener("change", function () {
	const lang = localeOptions.value;
	switchLanguage(lang);
	localStorage.setItem("locale", lang);
});

function switchLanguage(lang) {
	const elements = document.querySelectorAll("[aria-label]");
	elements.forEach((element) => {
		const key = element.getAttribute("aria-label");
		element.textContent = translations[lang][key] ? translations[lang][key] : element.textContent;
	});
}
