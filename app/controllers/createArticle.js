function createArticle(result) {
  var headline = result.response.docs[0].headline.main
  var snippet = result.response.docs[0].snippet || "none"
  var web_url = result.response.docs[0].web_url || "none"
  let article = new Article(headline, snippet, web_url)
  showSpecificArticle(article, result)
}

function showSpecificArticle(article, result) {
  var pub_date = result.response.docs[0].pub_date
  if (pub_date[0] === "2") {
    showArticle("#new-article-info", article)
  } else {
    showArticle("#old-article-info", article)
  }
}
