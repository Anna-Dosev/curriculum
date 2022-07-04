const movies = document.querySelector('.movies')

const removeStyles = function() {
    movies.querySelectorAll('li').forEach(li => {
        li.style.backgroundColor = '';
        li.style.color = '';
    });
};


movies.addEventListener('click', function (e) {
    const el = e.target;
    if (el.tagName === 'LI') {
        removeStyles();
        el.style.backgroundColor = 'crimson';
        el.style.color = 'white';
    };
});