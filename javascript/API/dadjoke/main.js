const jokeButton = document.querySelector('.joke-button');
const jokeContainer = document.querySelector('.joke-container')

let countUp = document.querySelector('.countUp')
let countDown= document.querySelector('.countDown')


const getJoke = async () => {
    const apiData = await fetch('https://icanhazdadjoke.com', {
        headers: {
            'Accept' : 'application/json'
        }
    })
    const jsonData = await apiData.json() //converts data to json since it is oriiginally in html on api website
    const joke = jsonData.joke
    jokeContainer.innerText = joke
}

let likeCount = 0
let dislikeCount = 0

function countLikes() {
    alert()
    likeCount++
    countUp.innerHTML = likeCount
}

function countDislikes() {
    dislikeCount++
    countDown.innerHTML = dislikeCount
}

jokeButton.addEventListener('click', getJoke)

countUp.addEventListener('click', countLikes)
countDown.addEventListener('click', countDislikes)

