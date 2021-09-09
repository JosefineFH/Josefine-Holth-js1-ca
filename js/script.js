const userId = "104468396673656781435";
const bookSelf = "1001"
const url = `https://www.googleapis.com/books/v1/users/${userId}/bookshelves/${bookSelf}/volumes?maxResults=40`;


const content = document.querySelector(".content");
const sortBooks = document.querySelector("#authors");
const loading  = document.querySelector(".loaderContent");

const select = document.querySelector("select");

let global = [];
// ? add a search field?
// ? Make this in to a function

setTimeout(function () {
fetch(url)
    .then(response => response.json())
    .then(data => {
        global = data.items;
        console.log(global);
        createHTML();
    })
    .catch(error => {
        console.log("An error occurred");
        content.innerHTML = errorMessage(` <p>${error}.</p> <p>404 - An error occurred when calling the API. Check that user id and bookself id is correct.</p>`);

    }) 

    console.log("done loading!")
    loading.classList.add("hide");

}, 1500);


function createHTML() {
    
    const booksInMyLibrary = global;
    const authorsArray = [];

    document.title = `My library`;

    // ? do this with a foreach?

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

    // Outputs the options in the selction list. 
    for (let a = 0; a < removeDubbleValuse.length; a++) {
        const author = removeDubbleValuse[a];

        sortBooks.innerHTML += `
            <option value="${author}">${author}</option>`
    }

}

select.addEventListener("change", viewBooksByChoiucenAuthor);

function viewBooksByChoiucenAuthor(event) {
    const selectedAuthor = event.target.value;
    const newHeading = document.querySelector("h1");

    content.innerHTML = "";

    loading.classList.remove("hide");

    setTimeout(function () {
        
    loading.classList.add("hide");
    document.title = `Books by ${selectedAuthor}`;

    newHeading.innerHTML = `
            <div class="simpleLine">
                <h1>Books by ${selectedAuthor} in your library</h1>
            </div>`;

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
    if (selectedAuthor === "allAuthors") {
        newHeading.innerHTML = `<div class="simpleLine">
        <h1>All your books in your Library</h1>
        </div>`
        
        sortBooks.innerHTML = ""
        sortBooks.innerHTML += `<option value="allAuthors">All authors</option>`
        
        createHTML();
    }
}, 1500);
}