var book1 = {
    "id": 1,
    "name": "'Game of Thrones'",
    "author": "George R. R. Martin",
    "pictureUrl": "https://www.booktopia.com.au/http_coversbooktopiacomau/big/9780006479888/a-game-of-thrones.jpg",
    "price": 24.99,
    "sellingPoints": [
        "An epic fantasy novel by the American novelist and screenwriter George R. R. Martin.",
        "Martin began the first volume of the series, A Game of Thrones, in 1991 and had it published in 1996.",
        "As of April 2015, the books have sold more than 60 million copies worldwide and, as of January 2017, have been translated into 47 languages."
    ]
}
$('#book-1-id li p').text(book1.id)
$('#book-1-name li p').text(book1.name)
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

var book2 = {
  "id": 2,
  "name": "'The Shining'",
  "author": "Stephen King",
  "pictureUrl": "https://images1.the-dots.com/v1/952815.jpg?p=projectImageFullJpg",
"price":18.99,
"sellingPoints": [
  "Published in 1977, it is King's third published novel and first hardback bestseller.",
  "The setting and characters are influenced by King's personal experiences, including both his visit to The Stanley Hotel in 1974 and his recovery from alcoholism.",
  "The novel was adapted into a 1980 feature film of the same name directed by Stanley Kubrick and co-written with Diane Johnson."
]
}
$('#book-2-id li p').text(book2.id)
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
// $('#book-1-sellingpoints-3').text(book1.sellingPoints[2])

var book3 = {
  "id": 3,
  "name": "'University Of Success'",
  "author": "OG Mandino",
  "pictureUrl": "https://images-na.ssl-images-amazon.com/images/I/51YhKdU6haL._SX316_BO1,204,203,200_.jpg",
  "price":15.99,
  "sellingPoints": [
"Dean of this unique University of Success is Og Mandino, the most acclaimed self-help writer of this generation.",
"Former president of Success Unlimited magazine, Mandino was the first recipient of the Napoleon Hill Gold Medal for literary achievement.",
"Each powerful lesson will bring you closer to your life’s goals."
  ]
}
$('#book-3-id li p').text(book3.id)
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
