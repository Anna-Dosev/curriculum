const options = document.querySelector('.options');
const feedback = document.querySelector('.feedback');


options.addEventListener('click', function(e) {
    if (e.target.hasAttribute('data-correct')) { //putting 'data' in front of an attribute signals that it is custom
       feedback.innerText = 'CORRECT!' //feedback is its own div in the html that shows if answer is right/wrong
        feedback.style.color = 'green'
    } else if (e.target.tagName === 'LI') {
        feedback.innerText = 'WRONG!'
        feedback.style.color = 'crimson' //add colors here instead of in styles.css bc colors change between answer choices
    }
});