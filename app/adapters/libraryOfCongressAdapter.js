function getImage(searchTerm) {
    let url = `http://loc.gov/pictures/search/?q=${searchTerm}&fo=json`
    $.ajax({
      method: 'GET',
      url: url,
      dataType: 'jsonp'
    }).done(function(result) {
      if (result.results.length > 0) {
        createImage(result.results)
      }
    }).fail(function(err) {
      throw err;
      console.log(err)
    });
  }
