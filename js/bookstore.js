// Create array of book objects
var books = [
  {
    "id": 1,
    "title": "Lasagna: A Retrospective",
    "author": "Garfield",
    "pictureUrl": "http://graphics8.nytimes.com/images/2015/10/15/dining/15RECIPE20DIN/15RECIPE20DIN-articleLarge.jpg",
    "price": 24,
    "sellingPoints": [
        "Lasagna is delicious.",
        "The essential guide to Italian casseroles of all types.",
        "Real G's move silent, like Lasagna. -Lil Wayne"
    ]
  },

 {
    "id": 2,
    "title": "Book 2 title",
    "author": "Book 2 Author",
    "pictureUrl": "http://via.placeholder.com/125x185",
    "price": 9.99,
    "sellingPoints": [
        "Book 2 Sell Point A",
        "Book 2 Sell Point B",
        "Book 2 Sell Point C"
    ]
  },

 {
    "id": 3,
    "title": "Book 3 title",
    "author": "Book 3 Author",
    "pictureUrl": "http://via.placeholder.com/125x185",
    "price": 9.99,
    "sellingPoints": [
        "Book 3 Sell Point A",
        "Book 3 Sell Point B",
        "Book 3 Sell Point C"
    ]
  }
]

// Function to append a book & its info to the page
var appendToPage = function(book) {
  $('.books').append("<div class='book' id='book" + book.id + "'></div>");
  $("#book" + book.id).append("<h3>" + book.title + "</h3>")
  $("#book" + book.id).append("<ul class='bookwrapper'></ul>");
  $("#book" + book.id + " .bookwrapper").append("<div id='book-" + book.id + "-author'><li>author: <p>" + book.author + "</p></li></div");
  $("#book" + book.id + ' .bookwrapper').append("<div id='book-" + book.id + "-price'><li>price: <p>" + book.price + "</p></li></div");
  $("#book" + book.id + ' .bookwrapper').append("<div id='book-" + book.id + "-picture'><li><img src='" + book.pictureUrl + "' alt='book-" + book.id + "-image'</li></div");
  $("#book" + book.id).append("<p>Selling Points:</p><div id='book-" + book.id + "-sellingpoints'><ul></ul></div>");
  var i = 0
  while (i < book.sellingPoints.length) {
    $("#book-" + book.id + "-sellingpoints ul").append('<li>' + book.sellingPoints[i] + '</li>');
    i++;
  }
}

// Append each book to page
for (var i = 0; i < books.length; i++) {
  appendToPage(books[i]);
}

// Make the form work
$( "form" ).on( "submit", ( event ) => {
        var data = $( event.target ).serializeArray();
        var formObject = {};

        event.preventDefault();

        formObject.id = books.length + 1;
        formObject.sellingPoints = [];

        data.forEach( ( field ) => {
            if( field.name.includes("selling-point") ){
                formObject.sellingPoints.push( field.value )
            }
            else if( field.name === "image-url" ){
                formObject.pictureUrl = field.value;
            }
            else {
                formObject[ field.name ] = field.value;
            }
        } );

        books.push( formObject );

        appendToPage( formObject );
    });
