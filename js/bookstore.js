var prodInfo = {
  "books":  [ { // Array of books with basic object information
              "id": 0,
              "title": "",
              "author": "",
              "price": 0,
              "imageUrl": "",
              "sellingPoints": ["","",""]
            } ],
  "music":  [ { // Array of books with basic object information
              "id": 0,
              "title": "",
              "author": "",
              "price": 0,
              "imageUrl": "",
              "sellingPoints": ["","",""]
            } ],
  "audioBooks": [ { // Array of audio books with basic object information
                  "id": 0,
                  "title": "",
                  "author": "",
                  "price": 0,
                  "imageUrl": "",
                  "sellingPoints": ["","",""]
                } ],
} // Object containing three arrays: books, audio books and music


var appendToPage = (prod, type) => {
  switch (type) { // Creating single object for code below based on type
    case music:       let obj = prod.music; break;
    case books:       let obj = prod.books; break;
    case audioBooks:  let obj = prod.audioBooks; break;
    default:          console.log('Error in type selection for appendToPage.')
  }

  // For the HTML, book is the original product.
  $("#bookList").append('<a href="#book' + obj.id + '">'); // Hyper link jump to a book
  $("#bookList").append('<div class="book" id="book' + obj.id + '"></a>');
  $("#bookList").append('<h3>Book ' + obj.id + ':</h3>');
  $("#bookList").append('<ul class="bookwrapper">');
  $("#bookList").append('<div class="book-id"><li>ID: ' +
                        obj.id + '</li></div>');
  $("#bookList").append('<div class="book-name"><li>Title: ' +
                        obj.title + '</li></div>');
  $("#bookList").append('<div class="book-author"><li>Author: ' +
                        obj.author + '</li></div>');
  $("#bookList").append('<div class="book-price"><li>Price: ' +
                        obj.price + '</li></div>');
  $("#bookList").append('<div class="book-picture"><li><img src="' +
                        obj.imageUrl + '" alt="Book Image"></li></div>');
  $("#bookList").append('</ul><p>Selling Points: </p>');
  $("#bookList").append('<div class="book-sellingpoints">');
  $("#bookList").append('<ul>');
  // Loop through array to get selling points.
  obj.sellingpoints.forEach ( function(sellingPoint) {
    $("#bookList").append('<li>' + sellingPoint + '</li>');
  } );
  $("#bookList").append('</ul></div></div>');
  $("#bookList").append('<br>');
}

var appendToJSON = () => {
  // Append to JSON file the current bookInfo object
  var bookJSON = JSON.stringify(bookInfo);

  // localStorage.setItem ( 'bookstore.json', bookJSON );
}

$( "form" ).on( "submit", ( event ) => {
    var data = $( event.target ).serializeArray();
    var formObject = {};

    event.preventDefault();

    let type =

    formObject.id = bookInfo.length;
    formObject.sellingPoints = [];

    data.forEach( ( field ) => {
        if( field.name === "sP-1" || field.name === "sP-2" || field.name === "sP-3"){
            formObject.sellingPoints.push( field.value )
        } else {
            formObject[ field.name ] = field.value;
        }
    } );
    prodInfo.push( formObject ); // Adding book to object array
    appendToPage( formObject, type ); // Adding book info to the webpage
    appendToJSON( ); // Adding book to JSON file
    $('form')[0].reset(); // Resetting form
});
