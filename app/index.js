$(document).ready(function() {
  search()
})

function search() {
  $('form').on('submit', function() {
    event.preventDefault()
    emptyDivs()
    var searchTerm = new Term($("#term").val()).term
    getImage(searchTerm)
    getArticle(searchTerm, "newest")
    setTimeout(getArticle, 5000, searchTerm, "oldest")
  })
}

function emptyDivs() {
  $("#new-article-info").empty()
  $("#old-article-info").empty()
  $("#digital-image").empty()
}

function showArticle(where, article) {
  $(`${where}`).append(`<br>Headline: ${article.headline}<br>Snippet: ${article.snippet}<br>URL: ${article.web_url}`)
}

function showImage(image) {
  var no_pics = ["http://www.loc.gov/pictures/static/images/item/500x500_look.png", "www.loc.gov/pictures/static/images/item/500x500_notdigitized.png" ]
  if (no_pics.includes(image.image_link)) {
    $("#digital-image").append("No image, sorry!")
  } else {
    $("#digital-image").append(`<br>Image: <img src="http://${image.image_link}"><br>date: ${image.date}<br>Creator: ${image.creator} <br>Title: ${image.title} `)
  }
}

function noResults(where) {
  $(`${where}`).append("Sorry, no results!")
}
