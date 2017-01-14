$(document).ready(function() {
  search()
})


function search() {
  $('form').on('submit', function() {
    event.preventDefault()
    $("#new-article-info").empty()
    $("#old-article-info").empty()
    var searchTerm = $("#term").val()
    getRecentArticle(searchTerm)
    getOldestArticle(searchTerm)
  })
}

function showRecentArticle(article) {
  $("#new-article-info").append(`<br>Headline: ${article.headline}<br>Snippet: ${article.snippet}<br>URL: ${article.web_url}`)
}

function showOldestArticle(article) {
  $("#old-article-info").append(`<br>Headline: ${article.headline}<br>Snippet: ${article.snippet}<br>URL: ${article.web_url}`)
}
