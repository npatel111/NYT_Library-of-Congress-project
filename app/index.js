$(document).ready(function() {
  search()
})


function search() {
  $('form').on('submit', function() {
    event.preventDefault()
    var searchTerm = $("#term").val()
    console.log(`searched for ${searchTerm}`)
    getRecentArticle(searchTerm)
  })
}
