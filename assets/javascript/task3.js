/* Put code for the task below */
// Get the button and directions element by their IDs
var changeTextButton = document.getElementById('changeTextButton');
var directionsElement = document.getElementById('directions');

// Add a click event listener to the button
changeTextButton.addEventListener('click', function() {
    // Change the text content of the directions element
    directionsElement.innerHTML = '<p>I Clicked It!</p>';
});
// i tried with chat gpt again but it still isn't working and i can't understand what is wrong because i checked with examples