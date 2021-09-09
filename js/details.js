const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const urlWithParams = `https://www.googleapis.com/books/v1/volumes/${id}`;

const content = document.querySelector(".mainContent");
const loading = document.querySelector(".loaderContent");

async function fetchBookDetails() {
    try {
        const response = await fetch(urlWithParams);
        const details = await (response.json())

        const bookDetails = details.volumeInfo;

        const title = bookDetails.title
        const subtitle = bookDetails.subtitle;
        const author = bookDetails.authors;
        const description = bookDetails.description;
        const bookImage = bookDetails.imageLinks.thumbnail;
        
        content.innerHTML += `
        <div>
            <img src="${bookImage}" alt="${title}">
        </div>
        <div class="titleAuthor">
            <h2>${title} - ${subtitle}</h2>
            <h3>${author}</h3>
        </div>
        <div class="text">
            <p>${description}</p>
        </div>`
        document.title = `About ${title}`;
    } catch (error) {
        content.classList.add("mainContentError");
        console.log(error)
        console.log("An error occurred");
        content.innerHTML = errorMessage(` <p>${error}.</p> <p>404 - An error occurred when calling the API. Check that book id is correct.</p>`);
    }
}
setTimeout(function () {
    loading.classList.add("hide");
    fetchBookDetails();
}, 1000);