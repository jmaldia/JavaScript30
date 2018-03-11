function playSound(e) {
	// selects element based on keys pressed and their values
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.keys[data-key="${e.keyCode}"]`);
	
	// prevents keys with no audio associated with it from doing anything
	if(!audio) return;
	// rewinds audio so that it goes back to the beginning everytime you hit a key
	audio.currentTime = 0;
	// play audio on key press
	audio.play();

	// highlight and animate key
	key.classList.add("pressed");
}

// funtion to remove the css that highlights and animates a key/
function removeTransition(e) {
	if(e.propertyName !== 'transform') return;
	this.classList.remove("pressed");
}

const keys = document.querySelectorAll('.keys');
// listen to each key on the keyboard that is matched that has a transitionend
keys.forEach(function(key) {
	key.addEventListener('transitionend', removeTransition);
});

// listens for keys pressed
window.addEventListener('keydown', playSound);


$(document).ready(function() {
 $('button').on('click', function() {
   var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
   $('.usa').append(message);
   $(this).remove();
 });
});