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
    // console.log(data.items);
    const booksInMyLibrary = data.items;

    for(let i = 0; i < booksInMyLibrary.length; i++){
        const bookInfo = booksInMyLibrary[i].volumeInfo;
        // console.log(bookInfo)
        const bookTitle = bookInfo.title;
        const bookId = booksInMyLibrary[i].id;
        const bookThumbnail = bookInfo.imageLinks.thumbnail;
        const authors = bookInfo.authors[0];

        content.innerHTML += `
        <div class="card">
            <img src="${bookThumbnail}" alt="${bookTitle}">
            <h2>${bookTitle}</h2>
            <p>${authors}</p>
            <a href="details.html?id=${bookId}" class="readMore">Read More</a>
        </div>`

        sortBooks.innerHTML += `
        <option value="${authors}">${authors}</option>
        `

        
    }
})
.catch(error => {
    console.log(error)
})

// sort books by author
// function sortBookByAurthors(authors){
//     console.log("test")
//     sortBooks.innerHTML += `
//         <option value="${authors}">${authors}</option>
//     `
// }
// sortBookByAurthors();
