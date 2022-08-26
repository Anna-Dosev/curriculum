
const foodResult = document.getElementById('food-result')
const foodItem = document.getElementById('food-item')
const foodButton = document.getElementById('food');

const getFood = async () => {
    const apiData = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=13a4aae35e96427686c99768c8c8f9c5`)
    const jsonData = await apiData.json()
    const foodResult = jsonData.recipes
foodItem.innerText = ''
for (let recipe of foodResult) {
    const foodIngredients = recipe.extendedIngredients
    for(let ingredient of foodIngredients){
        const recipeInfo = document.createElement('div')
        recipeInfo.className = 'recipe-container'
        recipeInfo.innerHTML =
        `<div>${ingredient.aisle}</div>`
        foodItem.append(recipeInfo)
    }
}
}
foodButton.addEventListener('click', getFood)