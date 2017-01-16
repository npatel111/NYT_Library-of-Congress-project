$(document).ready(function() {
  search()
})

function search() {
  $('form').on('submit', function() {
    event.preventDefault()
    emptyDivs()
    var searchTerm = $("#term").val()
    getDigitalItem(searchTerm)
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
  $("#digital-image").append(`<br>Image: <img src="http://${image.image_link}"><br>Created published date: ${image.created_published_date}<br>Creator: ${image.creator} <br>Title: ${image.title} `)
}
