const booksButton = document.querySelector('.books')
const membersButton = document.querySelector('.members')
const contentContainer = document.querySelector('.content-container')

const getBooks = async () => {
    const apiData = await fetch('https://fakerapi.it/api/v1/books')
    const jsonData = await apiData.json()
    const books = jsonData.data


    for (let book of books) {
        const title = book.title
        const author = book.author
        const description = book.description

        const bookInfo = document.createElement('div')
        bookInfo.className = 'book-container'
        bookInfo.innerHTML = 
        `<h3>${title}</h3>
        <h4>${author}</h4>
        <p>${description}</p>
        `

        // titleContainer.style.border = '1px solid black'
        // titleContainer.style.padding = '20px'
        // titleContainer.innerText = book.title
        contentContainer.append(bookInfo)
    }

}

booksButton.addEventListener('click', getBooks)
