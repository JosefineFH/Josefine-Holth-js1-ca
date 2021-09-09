# Josefine Holth JavaScript 1 -  Course Assigment :woman_technologist:

This assigment is a course assigment for javascript 1. 

The assigment is to find an free API and do two different api calls. One to fetch an array of result, second to fetch an singel result using the id, name or other propertys. 

## :round_pushpin: About the project :books:
I chose an google book api that is connected to my own google book account by using my user id. The books that are displayd are the ones that i own myself.

## :round_pushpin: Criterias
- index.html
  - Display at least 3 different properties in the HTML. 
  - Link each result to a details.html page-
  - Pass a parameter in the query string to the details.html.

- details.html
  - Retrive parameter from query string.
  - Make api call.
  - Display least 3 different properties from the JSON. 

- contact.html
  - Name - required.
  - Subject - value with minimum length of 10.
  - Email - must have a value, formatted like an email address.
  - Address - value with minimum length of 25.

## :round_pushpin: Build with
- Javscript
- API
- CSS
- HTML5

### How to find youe own user id in google books
1. log in to [google book](https://books.google.no/)
2. Click the my library
3. Then in the url ther is uid=. The numbers that follow is your id. 
4. Now you can paist that in script.js line 1.

## How to find your own bookshelf id
1. Inside of your bookshelf url ther is a peac of your code that says coll= the number that fallows is the bookshelf id. 
2. You can now paist that in bookSelf variable on line 2 in script.js


#updates I want to do
1. Make it posssible to type in your id and bookshelf id in an input field so it wil be used in the api call. But for the school assigment I have coded in my own user and bookshelf id.
