const question = document.querySelector('.question')

const answer = document.querySelector('.answer')

answer.style.display = 'none';

let isFAQOpen = false;

question.addEventListener('click', function () {
    if (isFAQOpen) {
        answer.style.display = 'none';
        isFAQOpen = false;
    } else {
        answer.style.display = 'block';
        isFAQOpen = true;
    }
})