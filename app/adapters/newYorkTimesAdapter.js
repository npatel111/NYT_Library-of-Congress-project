function getArticle(searchTerm, sortType) {
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
        if (result.response.docs[0]) {
          createArticle(result)
      }
    }).fail(function(err) {
      noResults(`#${sortType.substring(0,3)}-article-info`)
      throw err;
  });
}
