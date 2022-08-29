const button = document.getElementById("button");
const refreshButton = document.getElementById("refresh-button");
const colorCode = document.querySelector("#color-code");
const alert = document.querySelector("#alert");
const copyButton = document.querySelector("#copy-button");

const setBackgroundColor = () => {
	const randomColor = Math.floor(Math.random()*16777215).toString(16);
	return randomColor;
}


const setAlert = () => {
	alert.innerHTML = "copied to clipboard!"
}

const resetAlert = () => {
	setTimeout(() => {
		alert.innerHTML = "";
	}, 2000)
}

const copyToClipboard = () => {
	// colorCode.focus();
	colorCode.select();
  document.execCommand("copy");
	setAlert();
	resetAlert();
}

button.addEventListener("click", () => {
	const randomColor = "#" + setBackgroundColor();
	document.body.style.backgroundColor = randomColor;
	colorCode.innerHTML = randomColor;
});

refreshButton.addEventListener("click", () => {
	document.body.style.backgroundColor = "#ffff";
});

copyButton.addEventListener("click", copyToClipboard);