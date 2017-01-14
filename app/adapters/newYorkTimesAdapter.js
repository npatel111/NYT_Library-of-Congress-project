API_KEY = "60272acee61142479e18ad6ec41fc0f9"
function getRecentArticle(searchTerm) {
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
    'api-key': "60272acee61142479e18ad6ec41fc0f9",
    'q': `${searchTerm}`,
    "sort": "newest"
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    var headline = result.response.docs[0].headline.main
    var snippet = result.response.docs[0].snippet
    var web_url = result.response.docs[0].web_url
    let article = new Article(headline, snippet, web_url)
    showRecentArticle(article)
  }).fail(function(err) {
    throw err;
  });
}

function getOldestArticle(searchTerm) {
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
    'api-key': "60272acee61142479e18ad6ec41fc0f9",
    'q': `${searchTerm}`,
    "sort": "oldest"
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    var headline = result.response.docs[0].headline.main
    var snippet = result.response.docs[0].snippet
    var web_url = result.response.docs[0].web_url
    let article = new Article(headline, snippet, web_url)
    showOldestArticle(article)
  }).fail(function(err) {
    throw err;
  });
}
