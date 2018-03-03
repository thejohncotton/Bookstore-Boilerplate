// Array position 0 is format of data (empty values)
var prodInfo = { // Object of product arrays
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
};

var prodListType = ["book", "music", "audiobook"];
// audiobookList, bookList, musicList

var appendToPage = (prod, type) => {
// var appendToPage = (prod) => {
  // For the HTML, book is the original product and used for any product type
  // $("#bookList").append('<a href="#book' + prod.id + '">'); // Hyper link jump to a book
  // $("#bookList").append('<a href="#' + type + prod.id + '">'); // Hyper link jump to a book
  // $("#bookList").append('<div class="book" id="book' + prod.id + '"></a>');
  $("#bookList").append('<h3>Book ' + prod.id + ':</h3>');
  $("#bookList").append('<ul class="bookwrapper">');
  $("#bookList").append('<div class="book-id"><li>ID: ' +
                        prod.id + '</li></div>');
  // $("#bookList").append('<div class="book-type"><li>Type: ' +
  //                       type + '</li></div>');
  $("#bookList").append('<div class="book-name"><li>Title: ' +
                        prod.title + '</li></div>');
  $("#bookList").append('<div class="book-author"><li>Author: ' +
                        prod.author + '</li></div>');
  $("#bookList").append('<div class="book-price"><li>Price: ' +
                        prod.price + '</li></div>');
  $("#bookList").append('<div class="book-picture"><li><img src="' +
                        prod.imageUrl + '" alt="Book Image"></li></div>');
  $("#bookList").append('</ul><p>Selling Points: </p>');
  $("#bookList").append('<div class="book-sellingpoints">');
  $("#bookList").append('<ul>');
  // Loop through array to get selling points.
  prod.sellingPoints.forEach ( function ( sPoint ) {
    $("#bookList").append('<li>' + sPoint + '</li>');
  } );
  $("#bookList").append('</ul></div></div>');
  $("#bookList").append('<br>');
}

// Creating composite address of array based on selected radio button
var selectProdType = (dataObj) => {
  let object = {
    "array": []; // Empty array of length 0
    "type": ""; // Empty string placeholder
  };

  dataObj.forEach ((field) => {
    if ( field.name === "optRadio") {
      switch (field.value) { // Copy of Array addresses of length 1+
        case 'music-radio':       object.array = prodInfo.music;
                                  object.type = "Music";
                                  break;
        case 'book-radio':        object.array = prodInfo.books;
                                  object.type = "Book";
                                  break;
        case 'audioBook-radio':   object.array = prodInfo.audioBooks;
                                  object.type = "Audio Book";
                                  break;
        default:  console.log('ERROR: Invalid type selection for selectProdType().');
      }
    }
  } )
  return object;
};

// Clicking Submit starts it all off :D
$( "form" ).on( "submit", ( event ) => {
    var data = $( event.target ).serializeArray();
    var formObject = {};
    let prodObj = {};

    event.preventDefault();

    prodObj = selectProdType (data);

    if (prodObj.array.length !== 0) {
      formObject.id = prodObj.array.length;
      formObject.sellingPoints = [];

      data.forEach (( field ) => {
          if( field.name === "sP-1" || field.name === "sP-2" || field.name === "sP-3"){
              formObject.sellingPoints.push( field.value )
          } else if (field.name === "optRadio") {
            // do nothing .. skip this field here
          } else {
              formObject[ field.name ] = field.value;
          }
      } );
      prodObj.array.push( formObject ); // Adding book to type specific array
      appendToPage( formObject ); // Adding book info to the webpage
      // appendToPage( formObject, prodObj.type ); // Adding book info to the webpage
      // appendToJSON( ); // Adding book to JSON file
      // $('form')[0].reset(); // Resetting form
    } else {
      console.log ("ERROR: prodObj has length 0 (ie. optRadio value not setting correctly.)");
    }
});
