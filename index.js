const button = document.createElement("button");
const wrap = document.createElement("wrap");
document.body.appendChild(wrap);
wrap.appendChild(button);
button.innerHTML = `Click`;
let onoff = false;

function timer() {
	const currentTime = new Date();
	return currentTime;
}

async function getData() {
	const famous = await fetch(`https://type.fit/api/quotes`);
	const famousJson = await famous.json();
	const famouNum = Math.floor(Math.random() * 1643);
	const newTime = timer();
	const hours = newTime.getHours();
	const minutes = newTime.getMinutes();
	const seconds = newTime.getSeconds();
	const getTime = `${hours < 10 ? `0${hours}` : `${hours}`}:${
		minutes < 10 ? `0${minutes}` : `${minutes}`
	}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
	const span = document.createElement("span");
	if (onoff === true) {
		onoff = true;
		span.firstChild.remove();
	} else {
		onoff = false;
		wrap.appendChild(span);
		span.innerHTML = `${famousJson[famouNum].text} ${famousJson[famouNum].author} ${getTime}`;
	}
}

button.addEventListener("click", getData());
