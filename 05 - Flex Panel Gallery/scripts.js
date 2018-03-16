// Grab all the elements with class panel
const panels = document.querySelectorAll('.panel');

// Toggle the open class to make panel wider with animation
function toggleOpenClass() {
	this.classList.toggle('open');
};

// Toggle open-active class to bring text back to view
function toggleActiveClass(event) {
	if (event.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
};

// Listens for click and transition end events to call appropriate classes
panels.forEach(function(panel) {
	panel.addEventListener('click', toggleOpenClass);
});
panels.forEach(function(panel) {
	panel.addEventListener('transitionend', toggleActiveClass);
});

