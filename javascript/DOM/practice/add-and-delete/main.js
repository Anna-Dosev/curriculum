const root = document.getElementById('root');

let count = 0;

const removeChild = function(e) { //need to know the event bc we need to grab the target 
    const target = e.target
    const isChild = target.getAttribute('data-child'); //if child exists, this should be true
    if (isChild) {
        target.remove(); //removes a number if you click on it
}
}

const btn = document.createElement('button'); //had to changer order of code so that 'click me' stays above numbers rendered
btn.innerText = 'Click Me';
root.append(btn);

const parentDiv = document.createElement('div');
root.append(parentDiv);
parentDiv.addEventListener('click', removeChild)


const renderDiv = function() {
    count++ //will increase count by one
    const div = document.createElement('div');
    div.innerText = count //prints number, increases by one each time you click button
    div.style.backgroundColor = '#ddd';
    div.style.padding = '20 px';
    div.style.cursor = 'pointer';
    div.style.margin = '10px 0';
    div.style.fontSize = '2.5rem';
    div.setAttribute('data-child', count); //best prac to use 'data-' when adding own attributes
    parentDiv.append(div);
};

btn.addEventListener('click', renderDiv);
