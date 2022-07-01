const months = [
	"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]

const weekdays = [
	"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
]

//Select DOM Elements
const debutDate = new Date(2022, 9, 24, 17, 30, 0).getTime();
const countdownTimer = document.querySelector(".countdown-timer");
const countdownUnits = document.querySelectorAll(".countdown-unit");

function calculateTime() {
	const currentDate = new Date().getTime();
	const launchDuration = debutDate - currentDate;

	const oneDay = 24 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMinute = 60 * 1000;

	let days = Math.floor(launchDuration / oneDay);
	let hours = Math.floor((launchDuration % oneDay) / oneHour);
	let minutes = Math.floor((launchDuration % oneHour) / oneMinute);
	let seconds = Math.floor((launchDuration % oneMinute) / 1000);
	// console.log(hours);

	const timeArray = [days, hours, minutes, seconds];

	function formatTime(time) {
		if (time < 10) {
			return (time = `0${time}`);
		}
		else {
			return time;
		}
	}

	countdownUnits.forEach((unit, index) => {
		unit.innerText = formatTime(timeArray[index]);
	});

	if (launchDuration < 0) {
		clearInterval(countdown);
		countdownTimer.innerHTML = `<h4>The movie is out! <a href="netflix.com">Watch on Netflix<a/></h4>`
	}
}

let countdown = setInterval(calculateTime, 1000)

calculateTime();


