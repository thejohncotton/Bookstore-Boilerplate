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
}

var appendToPage = (prod) => {
  // For the HTML, book is the original product.
  $("#bookList").append('<a href="#book' + prod.id + '">'); // Hyper link jump to a book
  $("#bookList").append('<div class="book" id="book' + prod.id + '"></a>');
  $("#bookList").append('<h3>Book ' + prod.id + ':</h3>');
  $("#bookList").append('<ul class="bookwrapper">');
  $("#bookList").append('<div class="book-id"><li>ID: ' +
                        prod.id + '</li></div>');
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
  prod.sellingpoints.forEach ( function(sellingPoint) {
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

var selectProdType = (type) => {
  switch (type) { // Creating single object for code based on type
    case 'music':       return prodInfo.music; break;
    case 'book':        return prodInfo.books; break;
    case 'audioBook':   return prodInfo.audioBooks; break;
    default:          console.log('Error in type selection for appendToPage.');
  }
  return {};
}

$( "form" ).on( "submit", ( event ) => {
    var data = $( event.target ).serializeArray();
    var formObject = {};
    let prodObj = NULL;
console.log (data);
    event.preventDefault();

    data.forEach ((field) => {
      if ( field.name === "optRadio") {
        prodObj = selectProdType (field.value);
      }
    } );
console.log (prodObj);
    if (prodObj !== NULL) {
console.log ("verified not equal to NULL");
      formObject.id = prodObj.length;
      formObject.sellingPoints = [];

      data.forEach( ( field ) => {
          if( field.name === "sP-1" || field.name === "sP-2" || field.name === "sP-3"){
              formObject.sellingPoints.push( field.value )
          } else if (field.name === optRadio) {
            // do nothing .. skip this field here
          } else {
              formObject[ field.name ] = field.value;
          }
      } );
      prodObj.push( formObject ); // Adding book to type specific array
      appendToPage( formObject ); // Adding book info to the webpage
      // appendToJSON( ); // Adding book to JSON file
      // $('form')[0].reset(); // Resetting form
    }
});
