// Create object for each book
var book1 = {
    "id": 1,
    "name": "Lasagna: A Retrospective",
    "author": "Garfield",
    "pictureUrl": "http://graphics8.nytimes.com/images/2015/10/15/dining/15RECIPE20DIN/15RECIPE20DIN-articleLarge.jpg",
    "price": 24,
    "sellingPoints": [
        "Lasagna is delicious.",
        "The essential guide to Italian casseroles of all types.",
        "Real G's move silent, like Lasagna. -Lil Wayne"
    ]
}

var book2 = {
    "id": 2,
    "name": "",
    "author": "",
    "pictureUrl": "http://via.placeholder.com/125x185",
    "price": 9.99,
    "sellingPoints": [
        "",
        "",
        ""
    ]
}

var book3 = {
    "id": 3,
    "name": "",
    "author": "",
    "pictureUrl": "http://via.placeholder.com/125x185",
    "price": 9.99,
    "sellingPoints": [
        "",
        "",
        ""
    ]
}

// Display info for each book
var addToPage = function(book) {
  // $('.content-area').append($("<div class='book' id='book" + book.id + "'>").html( $('<h3>').text(book.name)));
  $('.content-area').html("<h3 class='book' id='book" + book.id + "'>" + book.name + "</h3>");
}

addToPage(book1);

/*
<div class="content-area">
  <div class="book" id="book1">
    <h3>Book 1</h3>
    <ul id="bookwrapper"><div id="book-1-id"><li></li></div>
      <div id="book-1-name"><li>name: <p></p></li></div>
      <div id="book-1-author"><li>author: <p></p></li></div>
      <div id="book-1-price"><li>price: <p></p></li></div>
      <div id="book-1-picture"><li><img src="http://via.placeholder.com/125x185" alt="book-1 image"></li></div>
    </ul>
      <p>Selling Points:</p>
      <div id="book-1-sellingpoints">
        <ul>

        </ul>
      </div>
  </div>
  */

// Display info for Book 1
// $('#book-1-id li p').text(book1.id) // don't display id
/* $('#book-1-name li p').text(book1.name)
$('#book-1-author li p').text(book1.author)
$('#book-1-picture li img').attr("src", book1.pictureUrl)
$('#book-1-price li p').text(book1.price)
// loop through array to get selling points.
var i = 0
while (i < book1.sellingPoints.length) {
  $('#book-1-sellingpoints ul').append('<li>' + book1.sellingPoints[i] + '</li>');
  console.log(book1.sellingPoints[i]);
  i ++
}

// $('#book-1-sellingpoints-2').text(book1.sellingPoints[1])
// $('#book-1-sellingpoints-3').text(book1.sellingPoints[2])

// Display info for Book 2
// $('#book-2-id li p').text(book2.id) // don't display id
$('#book-2-name li p').text(book2.name)
$('#book-2-author li p').text(book2.author)
$('#book-2-picture li img').attr("src", book2.pictureUrl)
$('#book-2-price li p').text(book2.price)
// loop through array to get selling points.
var i = 0
while (i < book2.sellingPoints.length) {
  $('#book-2-sellingpoints ul').append('<li>' + book2.sellingPoints[i] + '</li>');
  console.log(book2.sellingPoints[i]);
  i ++
}


// Display info for Book 3
// $('#book-3-id li p').text(book3.id) // don't display id
$('#book-3-name li p').text(book3.name)
$('#book-3-author li p').text(book3.author)
$('#book-3-picture li img').attr("src", book3.pictureUrl)
$('#book-3-price li p').text(book3.price)
// loop through array to get selling points.
var i = 0
while (i < book3.sellingPoints.length) {
  $('#book-3-sellingpoints ul').append('<li>' + book3.sellingPoints[i] + '</li>');
  console.log(book3.sellingPoints[i]);
  i ++
}
*/
