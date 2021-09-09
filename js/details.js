const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const urlWithParams = `https://www.googleapis.com/books/v1/volumes/${id}`;

const content = document.querySelector(".mainContent");

async function fetchBookDetails(){
    try{
        const response = await fetch(urlWithParams);
        const details = await(response.json())
        // volumeInfo.imageLinks.extraLarge
        console.log(details);

        const bookDetails = details.volumeInfo;

        const title = bookDetails.title
        const subtitle = bookDetails.subtitle;
        const author = bookDetails.authors;
        const description = bookDetails.description;
        const bookImage = bookDetails.imageLinks.thumbnail;
        console.log(bookImage)

        // console.log(title, subtitle, author, description,)
        
        content.innerHTML += `
            <div>
                <h2>${title} - ${subtitle}</h2>
                <h3>${author}</h3>
                <img src="${bookImage}" alt="${title}">
                <p>${description}</p>
            </div>
        `
        // Gives title its value/text
        document.title = `About ${title}`;
    }catch(error){
        console.log(error)
        console.log("An error occurred");
        content.innerHTML = errorMessage(` <p>${error}.</p> <p>404 - An error occurred when calling the API. Check that user id and bookself id is correct.</p>`);
    }
}

fetchBookDetails();