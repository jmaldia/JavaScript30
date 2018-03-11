// Store Selector elements in variables
const secondsSelector = document.querySelector('.seconds');
const minutesSelector = document.querySelector('.minutes');
const hoursSelector = document.querySelector('.hours');

// Declare function to grab the time
function setDate() {
	// Create and Initialize Date and Time variables
	const currentDate = new Date;

	const seconds = currentDate.getSeconds();
	const minutes = currentDate.getMinutes();
	const hours = currentDate.getHours();

	// Convert Time to Degrees. 90 at the End is to Offset the initial value of degrees in CSS
	const secondsInDegrees = ((seconds / 60) * 360) + 90;
	const minutesInDegrees = ((minutes / 60) * 360) + 90;
	const hoursInDegrees = ((hours / 12) * 360) + 90;

	// Change transform rotate values based on the degrees/time
	secondsSelector.style.transform = `rotate(${secondsInDegrees}deg)`;
	minutesSelector.style.transform = `rotate(${minutesInDegrees}deg)`;
	hoursSelector.style.transform = `rotate(${hoursInDegrees}deg)`;
}

// Calls the function setDate every 1000 milliseconds
setInterval(setDate, 1000);

// Call function
setDate();