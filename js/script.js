const userId = "104468396673656781435";
const bookSelf = "1001"
const url = `https://www.googleapis.com/books/v1/users/${userId}/bookshelves/${bookSelf}/volumes`;

const content = document.querySelector(".content");
const sortBooks = document.querySelector("#authors");

const select = document.querySelector("select");

let global = [];

fetch(url)
    .then(response => response.json())
    .then(data => {
        global = data.items;
        createHTML();
    })
    .catch(error => console.log(error))

function createHTML(results) {
    const booksInMyLibrary = global;
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

}
select.addEventListener("change", buildList);


function buildList(event) {
    const selectedAuthor = event.target.value;
    const newHeading = document.querySelector("h1");

    newHeading.innerHTML = `
            <div class="simpleLine">
                <h1>${selectedAuthor}</h1>
            </div>`;
    content.innerHTML = "";

    for (let s = 0; s < global.length; s++) {
        const booksInMyLibrary = global[s].volumeInfo;
        const authorFromGlobalVar = global[s].volumeInfo.authors[0];

        if (selectedAuthor === authorFromGlobalVar) {
            content.innerHTML += `
            <div class="card">
                <img src="${booksInMyLibrary.imageLinks.thumbnail}" alt="${booksInMyLibrary.title}">
                <h2>${booksInMyLibrary.title}</h2>
                <p>${authorFromGlobalVar}</p>
                <a href="details.html?id=${global[s].id}" class="readMore">Read More</a>
            </div>`
        }
    }
}