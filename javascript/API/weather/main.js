const button = document.querySelector('.btn')

const city = document.querySelector('.city-name');
const temp = document.querySelector('.temp');
const input = document.querySelector('.zip-input');


// An API all using .then()
// const getWeather = () => {
//     const userZip = input.value

//     console.log(userZip);

//     fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=6988557977bc373504dd6f2fb9c704fb&units=imperial`)
//     .then(response => response.json()) //changing inspect body from chaos into json
//     .then(data => {
//         console.log(data)
//         const cityName = data.name; //data.name comes from object in inspect console
//         city.innerText = cityName;

//         const cityTemp = data.main.temp; //data.main.temp comes from object in inspect console
//         temp.innerText = cityTemp;
//     });
//}

const getWeather = async () => {
    const userZip = input.value;

    const rawData = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=6988557977bc373504dd6f2fb9c704fb&units=imperial`)
    //whatever is after 'await', we have to wait for it in orde to move on to rest of code
    const data = await rawData.json()

    const cityName = data.name;
    city.innerText = cityName;
    const currentTemp = data.main.temp;
    temp.innerText = currentTemp;
}

button.addEventListener('click', getWeather)

//fetch method has a bit of a wait, making a request to the API so it is not instantly reported