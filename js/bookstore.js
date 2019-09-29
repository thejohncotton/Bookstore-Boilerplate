// Create array of book objects
var products = {
  "books": [
    {
      "type": "books",
      "id": 0, // reset ids to start with zero for accurate looping and adding

      "title": "An American Marriage",
      "creator": "Tayari Jones",
      "pictureUrl": "/css/photos/windowAmerican.png",

      "price": 24,
      "sellingPoints": [
          "Marriages are great.",
          "The essential guide to Marriages of all types.",
          "Real Couples's move in silence, like Lasagna. -Lil Me"
      ]
    },

    {
        "type": "books",
        "id": 1,
        "title": "Elastic",
        "creator": "Leonard Mlodinov",

        "pictureUrl": "/css/photos/windowElastic.png",
        "price": 20,

        "sellingPoints": [
            "It's elastic",
            "Elasticity",
            "Elastic"
        ]
    },

   {
      "type": "books",
      "id": 2,
      "title": "I Am Malala",
      "creator": "Malala Yousafzai",
      "pictureUrl": "/css/photos/windowMalala.png",
      "price": 9.99,
      "sellingPoints": [
          "Malala la",
          "Malala lala",
          "Malala lalala"
      ]
    },

  {
        "type": "books",
        "id": 3,
        "title": "Recovery | Freedom from Our Addictions",
        "creator": "Russell Brand",
        "pictureUrl": "/css/photos/WindowRussel.png",
        "price": 24,
        "sellingPoints": [
            "Recover",
            "Freedom",
            "From Addictions"
        ]
    },
    {
        "type": "books",
        "id": 4,
        "title": "Thug Kitchen",
        "creator": "Matt Holloway, Michelle Davis, and Thug Kitchen, LLC",
        "pictureUrl": "/css/photos/windowthug.png",
        "price": 24,
        "sellingPoints": [
            "#1 New York Times Bestseller",
            "Cool cover",
            "Cookbook!"
        ]
    },
     {
        "type": "books",
        "id": 5,
        "title": "Women in Science",
        "creator": "Rachel Ignotofsky",
        "pictureUrl": "/css/photos/windowWomen.png",
        "price": 24,
        "sellingPoints": [
            "50 Fearless",
            "Pioneers Who",
            "Changed the World"
        ]
    }
  ], // end "books"
  "music": [
    {
      "type": "music",
      "id": 0,
      "title": "In Return",
      "creator": "Odesza",
      "pictureUrl": "https://f4.bcbits.com/img/a3774066618_16.jpg",
      "price": 11.99,
      "sellingPoints": [
          "Debuted at number 1 on <i>Billboard</i>'s Top Dance/Electronic Albums",
          "Featuring <i>Zyra</i> and <i>Shy Girls</i>",
          '<i>"How two young producers sat down and came up with this really kinda boggles the mind."</i>  --Mike Waite, <i>Earmilk</i>'
      ]
    },
    {
      "type": "music",
      "id": 1,
      "title": "Art Angels",
      "creator": "Grimes",
      "pictureUrl": "https://media.pitchfork.com/photos/5929b220c0084474cd0c1f04/1:1/w_320/59ef246f.jpg",
      "price": 9.99,
      "sellingPoints": [
          "Featuring <i>Aristophanes</i> and Janelle Monáe",
          '<i>"impossible to resist"  --DIY</i>\'s El Hunt',
          "Critically acclaimed"
      ]
    }
  ] // end "music"
} // end products object

// Function to append a book & its info to the page
function appendToPage(product) {
  var contentId = product.type + product.id;
  $('.products').append("<div class='" + product.type + "' " + product.type + "Card' id='" + contentId + "'></div>");
  $("#" + contentId).append("<h3>" + product.title + "</h3>")
  $("#" + contentId).append("<ul class='product-wrapper'></ul>");
  if (product.type === "books") {
    $("#" + contentId + " .product-wrapper").append("<div id='" + contentId + "-author'><li>by " + product.creator + "</li></div");
  } else {
    $("#" + contentId + " .product-wrapper").append("<div id='" + contentId + "-artist'><li>by " + product.creator + "</li></div");
  }
  $("#" + contentId + ' .product-wrapper').append("<div id='" + contentId + "-price'><li>$" + product.price + "</li></div");
  $("#" + contentId + ' .product-wrapper').append("<div id='" + contentId + "-picture'><li><img src='" + product.pictureUrl + "' alt='" + contentId + "-image'</li></div");
  $("#" + contentId).append("<p>Selling Points:</p><div id='" + contentId + "-sellingpoints'><ul></ul></div>");

  product.sellingPoints.forEach(function(point) {
    $("#" + contentId + "-sellingpoints ul").append('<li>' + point + '</li>');
  })
}

// Append each book to page - refactored below
// products.forEach(function(product){
//   appendToPage(product);
// })

// Append each book to page - refactored
for ( var key in products ){ // key being "books" or "music"
  products[key].forEach(function(product){
    appendToPage(product); // re-renders each product in the array
  });
};

// Function to create a new product from form
function parseProductForm( form ){
  var data = $(form).serializeArray();
  var formObject = {};
  var productArray; // create variable for "books" or "music" array

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

  productArray = products[formObject.type]; // should be "books" or "music" array
  formObject.id = productArray.length++; // set id to be one more than the length of "books" or "music"

  return formObject;
};

// function to add new product from form to products and to page
function renderNewProduct(formObject){
    $('.products').empty(); // jQuery function to refresh the products div

    products[formObject.type].push(formObject); // adds the new product to "books" or "music"
    for ( var key in products ){ // key being "books" or "music"
      products[key].forEach(function(product){
        appendToPage(product); // re-renders each product in the array
      });
    };

};

// Make the form work
$('.form').on('submit', ( event ) => {
    event.preventDefault();

    if($('input[name=type]:checked').length<=0) {
     alert('Please select a product type ("Book" or "Album"), and then resubmit your addition (by clicking "Add this product to the store" again).');
    } else {
      var formObject = parseProductForm(event.target);
      renderNewProduct(formObject);
    }

});


    // all code below commented out because books already added to page above

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
