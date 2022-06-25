const root = document.getElementById('root');

const heading = document.createElement('h1');
heading.innerText = 'My Cat Felix';
root.append(heading); 

const image = document.createElement('img')
image.src = 'https://placekitten.com/g/300/200'; //image element with a source
root.append(image);

const caption = document.createElement('p');
caption.innerText = 'Felix has been with me since the beginning'; //set a property on the element
caption.classList = 'caption'; //need to put a class on caption in order to change text size or make other edits 
root.append(caption);