const container = document.querySelector('.container');
const message = document.querySelector('.message');


container.addEventListener('click',function(e) {
    const el = e.target;
    if (el.hasAttribute('data-num')) {
        message.innerText = `You clicked no ${el.innerText}`;
    }
})