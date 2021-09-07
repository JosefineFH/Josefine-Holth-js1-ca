const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const urlWithParams = `https://www.googleapis.com/books/v1/volumes/${id}`;

const contant = document.querySelector(".mainContent");

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
        
        contant.innerHTML += `
            <div>
                <h2>${title} - ${subtitle}</h2>
                <h3>${author}</h3>
                <img src="${bookImage}" alt="${title}">
                <p>${description}</p>
            </div>
        `
    }catch(error){
        console.log(error)
    }
}

fetchBookDetails();