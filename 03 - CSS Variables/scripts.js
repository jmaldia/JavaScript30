const inputs = document.querySelectorAll('.controls input');

function changeProperty() {
	const unitOfMeasure = this.dataset.unit || "";

	document.documentElement.style.setProperty(`--${this.name}`, this.value + unitOfMeasure);
	console.log(unitOfMeasure);
}

inputs.forEach(function(input) {
	input.addEventListener('change', changeProperty)
});
inputs.forEach(function(input) {
	input.addEventListener('mousemove', changeProperty)
});

// inputs.forEach(input => input.addEventListener('change', changeProperty));

console.log(inputs);