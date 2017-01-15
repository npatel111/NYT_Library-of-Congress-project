$(document).ready(function() {
  search()
})


function search() {
  $('form').on('submit', function() {
    // debugger
    event.preventDefault()
    $("#new-article-info").empty()
    $("#old-article-info").empty()
    $("#digital-image").empty()
    var searchTerm = $("#term").val()
    getDigitalItem(searchTerm)
    // debugger
    getArticle(searchTerm, "newest")
    // debugger
    getArticle(searchTerm, "oldest")

  })
}



function showRecentArticle(article) {
  // debugger
  $("#new-article-info").append(`<br>Headline: ${article.headline}<br>Snippet: ${article.snippet}<br>URL: ${article.web_url}`)
}

function showOldestArticle(article) {
  // debugger
  $("#old-article-info").append(`<br>Headline: ${article.headline}<br>Snippet: ${article.snippet}<br>URL: ${article.web_url}`)
}

function showImage(image) {
  $("#digital-image").append(`<br>Image: <img src="http://${image.image_link}"><br>Created published date: ${image.created_published_date}<br>Creator: ${image.creator} <br>Title: ${image.title} `)
}
