// Grabs all the input elements under the div named control
const inputs = document.querySelectorAll('.controls input');

// This function changes the property value of the CSS variables
// for the selected input
function changeProperty() {
	// if the element is not colot, this is set to "px"
	const unitOfMeasure = this.dataset.unit || "";

	document.documentElement.style.setProperty(`--${this.name}`, this.value + unitOfMeasure);
	console.log(unitOfMeasure);
}

// Listens to any changes in the input value
inputs.forEach(function(input) {
	input.addEventListener('change', changeProperty)
});
inputs.forEach(function(input) {
	input.addEventListener('mousemove', changeProperty)
});