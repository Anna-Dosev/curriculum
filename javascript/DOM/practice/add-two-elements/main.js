const root = document.getElementById('root'); //cache root in order to manipulate it, which in turn, changes the HTML

const heading = document.createElement('h1');
heading.innerText = 'My Trip to France'
heading.style.fontFamily = 'sans-serif'
heading.style.color = '#444'
root.append(heading); //this is how we actually add it to the DOM, which will make it appear on the front end
        //append does not make a sibling to root, it makes a child to root

const description = document.createElement('p');
description.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id repellendus dolore mollitia quibusdam? Sapiente aut ab fugiat doloribus, quis voluptas aliquam quasi sed, totam voluptate consectetur reiciendis officiis pariatur dolor enim. Totam tempore, saepe placeat ex obcaecati at. Minima necessitatibus assumenda, deserunt exercitationem error vel quasi optio doloribus? Facere, consectetur.' //this is how we actually put something in the element
description.style.lineHeight = '1.35rem'
root.append(description); 