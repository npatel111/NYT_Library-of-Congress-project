API_KEY = "60272acee61142479e18ad6ec41fc0f9"
function getArticle(searchTerm, sortType) {
  setTimeout(function () {


    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "60272acee61142479e18ad6ec41fc0f9",
      'q': `${searchTerm}`,
      "sort": `${sortType}`
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      // debugger
        if (result.response.docs[0]) {
        var headline = result.response.docs[0].headline.main
        var snippet = result.response.docs[0].snippet || "none"
        var web_url = result.response.docs[0].web_url || "none"
        var pub_date = result.response.docs[0].pub_date
        createArticle(headline, snippet, web_url, pub_date, searchTerm)
        // let article = new Article(headline, snippet, web_url)
        // showRecentArticle(article)
      }
    }, 5000)//.fail(function(err) {
  //   throw err;
  });
}

// function getOldestArticle(searchTerm) {
//   // debugger
//   var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
//   url += '?' + $.param({
//     'api-key': "60272acee61142479e18ad6ec41fc0f9",
//     'q': `${searchTerm}`,
//     "sort": "oldest"
//   });
//   $.ajax({
//     url: url,
//     method: 'GET',
//   }).done(function(result) {
//     // debugger
//     if (result.response.docs[0]) {
//     var headline = result.response.docs[0].headline.main
//     var snippet = result.response.docs[0].snippet || "none"
//     var web_url = result.response.docs[0].web_url || "none"
//     let article = new Article(headline, snippet, web_url)
//     showOldestArticle(article)
//   }
// })//.fail(function(err) {
//   //   throw err;
//   // });
// }
