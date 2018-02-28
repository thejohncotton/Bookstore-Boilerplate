// Create array of book objects
var books = [
  {
    "id": 1,

    "title": "An American Marriage",
    "author": "Tayari Jones",
    "pictureUrl": "/css/photos/windowAmerican.png",

    "price": 24,
    "sellingPoints": [
        "Marriages are great.",
        "The essential guide to Marriages of all types.",
        "Real Couples's move in silence, like Lasagna. -Lil Me"
    ]
  },

  {
      "id": 2,
      "title": "Elastic",
      "author": "Leonard Mlodinov",

      "pictureUrl": "/css/photos/windowElastic.png",
      "price": 20,

      "sellingPoints": [
          "It's elastic",
          "Elasticity",
          "Elastic"
      ]
  },

 {
    "id": 3,
    "title": "I Am Malala",
    "author": "Malala Yousafzai",
    "pictureUrl": "/css/photos/windowMalala.png",
    "price": 9.99,
    "sellingPoints": [
        "Malala la",
        "Malala lala",
        "Malala lalala"
    ]
  },

{
      "id": 4,
      "title": "Recovery | Freedom from Our Addictions",
      "author": "Russell Brand",
      "pictureUrl": "/css/photos/WindowRussel.png",
      "price": 24,
      "sellingPoints": [
          "Recover",
          "Freedom",
          "From Addictions"
      ]
  },
  {
      "id": 5,
      "title": "Thug Kitchen",
      "author": "Matt Holloway, Michelle Davis, and Thug Kitchen, LLC",
      "pictureUrl": "/css/photos/windowthug.png",
      "price": 24,
      "sellingPoints": [
          "#1 New York Times Bestseller",
          "Cool cover",
          "Cookbook!"
      ]
  },
   {
      "id": 6,
      "title": "Women in Science",
      "author": "Rachel Ignotofsky",
      "pictureUrl": "/css/photos/windowWomen.png",
      "price": 24,
      "sellingPoints": [
          "50 Fearless",
          "Pioneers Who",
          "Changed the World"
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

    // all code below commented out because books alread added to page above

// book 2 has been added to beginning of script, in var books
// console.log("Book2");
// $('#book-2-id li p').text(book2.id)
// $('#book-2-name li p').text(book2.name)
// $('#book-2-author li p').text(book2.author)
// $('#book-2-picture li img').attr("src", book2.pictureUrl)
// $('#book-2-price li p').text(book2.price)
//
// var i = 0
// while (i < book2.sellingPoints.length) {
//   $('#book-2-sellingpoints ul').append('<li>' + book2.sellingPoints[i] + '</li>');
//   console.log(book2.sellingPoints[i]);
//   i ++
// }

// book3 seems to be a repeat of book 1
// var book3 = {
//     "id": 3,
//     "name": "An American Marriage",
//     "author": "Tayari Jones",
//     "pictureUrl": "/css/photos/WindowMalala.png",
//     "price": 24,
//     "sellingPoints": [
//         "Marriages are great.",
//         "The essential guide to Marriages of all types.",
//         "Real Couples's move in silence, like Lasagna. -Lil Me"
//     ]
// }

// $('#book-3-id li p').text(book3.id)
// $('#book-3-name li p').text(book3.name)
// $('#book-3-author li p').text(book3.author)
// $('#book-3-picture li img').attr("src", book3.pictureUrl)
// $('#book-3-price li p').text(book3.price)
// // loop through array to get selling points.
// var i = 0
// while (i < book3.sellingPoints.length) {
//   $('#book-3-sellingpoints ul').append('<li>' + book3.sellingPoints[i] + '</li>');
//   console.log(book3.sellingPoints[i]);
//   i ++
// }


// $('#book-4-id li p').text(book4.id)
// $('#book-4-name li p').text(book4.name)
// $('#book-4-author li p').text(book4.author)
// $('#book-4-picture li img').attr("src", book4.pictureUrl)
// $('#book-4-price li p').text(book4.price)
// // loop through array to get selling points.
// var i = 0
// while (i < book4.sellingPoints.length) {
//   $('#book-4-sellingpoints ul').append('<li>' + book4.sellingPoints[i] + '</li>');
//   console.log(book4.sellingPoints[i]);
//   i ++
// }


// $('#book-5-id li p').text(book5.id)
// $('#book-5-name li p').text(book5.name)
// $('#book-5-author li p').text(book5.author)
// $('#book-5-picture li img').attr("src", book5.pictureUrl)
// $('#book-5-price li p').text(book5.price)
// // loop through array to get selling points.
// var i = 0
// while (i < book5.sellingPoints.length) {
//   $('#book-5-sellingpoints ul').append('<li>' + book5.sellingPoints[i] + '</li>');
//   console.log(book5.sellingPoints[i]);
//   i ++
// }


// $('#book-6-id li p').text(book6.id)
// $('#book-6-name li p').text(book6.name)
// $('#book-6-author li p').text(book6.author)
// $('#book-6-picture li img').attr("src", book6.pictureUrl)
// $('#book-6-price li p').text(book6.price)
// // loop through array to get selling points.
// var i = 0
// while (i < book6.sellingPoints.length) {
//   $('#book-6-sellingpoints ul').append('<li>' + book6.sellingPoints[i] + '</li>');
//   console.log(book6.sellingPoints[i]);
//   i ++
// }

// $('#book-2-sellingpoints-2').text(book1.sellingPoints[1])
// $('#book-1-sellingpoints-3').text(book1.sellingPoints[2])
