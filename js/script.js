const userId = "104468396673656781435";
const bookSelf = "1001"
const url = `https://www.googleapis.com/books/v1/users/${userId}/bookshelves/${bookSelf}/volumes`;

const content = document.querySelector(".content");
const sortBooks = document.querySelector("#authors");

fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const booksInMyLibrary = data.items;
        const authorsArray = [];

        for (let i = 0; i < booksInMyLibrary.length; i++) {
            const bookInfo = booksInMyLibrary[i].volumeInfo;
            const bookTitle = bookInfo.title;
            const bookId = booksInMyLibrary[i].id;
            const bookThumbnail = bookInfo.imageLinks.thumbnail;
            const authors = bookInfo.authors[0];

            authorsArray.push(authors)

            content.innerHTML += `
        <div class="card">
            <img src="${bookThumbnail}" alt="${bookTitle}">
            <h2>${bookTitle}</h2>
            <p>${authors}</p>
            <a href="details.html?id=${bookId}" class="readMore">Read More</a>
        </div>`
        }

        // remove the dobble valuse in the array with authors
        let removeDubbleValuse = [...new Set(authorsArray)];
        for (let a = 0; a < removeDubbleValuse.length; a++) {
            const author = removeDubbleValuse[a];

            sortBooks.innerHTML += `
            <option value="${author}">${author}</option>`
        }
    })
    .catch(error => {
        console.log(error)
    })