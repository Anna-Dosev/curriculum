

const form = document.getElementById('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(e.target);
    const stringified = stringifyFormData(data);
    fetch('/contact', {
        method: 'POST',
        body: stringified,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.json()).then(response => console.log(response));
});



function stringifyFormData(fd) {
  const data = {
    name: fd.get('name'),
    email: fd.get('email'),
    message: fd.get('message')
  };
  return JSON.stringify(data, null, 4);
}