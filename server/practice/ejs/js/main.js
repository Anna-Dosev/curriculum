//alert ('hello');

const authBtn = document.getElementById('auth');

authBtn.addEventListener('click', e => {
    const type = e.target.dataset.type;
    const body = type === 'login' ? JSON.stringify({login: true}) : null;
    const TYPE = type === 'login' ? 'POST' : 'GET'

    fetch(`/${type}`, {
        method: TYPE,
        body,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.json()).then(response => {
        window.location = response.redirectURL;
    });
});