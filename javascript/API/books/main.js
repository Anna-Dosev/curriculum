const booksButton = document.querySelector('.books')
const membersButton = document.querySelector('.members')
const contentContainer = document.querySelector('.content-container')

const getBooks = async () => {
    const apiData = await fetch('https://fakerapi.it/api/v1/books')
    const jsonData = await apiData.json()
    const books = jsonData.data
    
    contentContainer.innerText = ''

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
        contentContainer.append(bookInfo)
    }
}

const getMembers = async () => {
    const apiData = await fetch('https://fakerapi.it/api/v1/users')
    const jsonData = await apiData.json()
    const users = jsonData.data

    contentContainer.innerText = ''

    for (let member of users) {
        const firstName = member.firstname
        const lastName = member.lastname 
        const email = member.email

        const memberInfo = document.createElement('div')
        memberInfo.className = 'member-container'
        memberInfo.innerHTML = 
        `<h3 class='name'>${firstName + ' ' + lastName}</h3>
        <p class='email'>${email}</p>
        `
        contentContainer.append(memberInfo)
    }
}

booksButton.addEventListener('click', getBooks)
membersButton.addEventListener('click', getMembers)
