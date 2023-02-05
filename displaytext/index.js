/**
 * @param { HTMLTextAreaElement } textArea
 */
function promptCopy(textArea) {
	let encoded = encodeURIComponent(textArea.value);
	/** @type { HTMLAnchorElement } */ let output = document.getElementById("output");
	let url = window.location.href + "?text=" + encoded;
	console.log(url);
	output.innerText = url;
	output.href = url;
	
	if (confirm("Copy the URL to the clipboard?")) {
		setTimeout(() => {
			navigator.clipboard.writeText(url);
		}, 250);
	}
}

function init() {
	globalThis.queryStrings = Object.fromEntries(new URLSearchParams(window.location.search).entries());
	Object.freeze(globalThis.queryStrings);

	if (globalThis.queryStrings.text) {
		document.body.innerHTML = globalThis.queryStrings.text;
	} else {
		document.body.innerHTML = "\t\t<textarea id=\"text\"></textarea><br>\n\t\t<button onclick=promptCopy(document.getElementById(\"text\"))>Generate URL</button><br><a id=\"output\" href=\".\"></p>";
	}
}