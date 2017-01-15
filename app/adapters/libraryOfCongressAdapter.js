function getDigitalItem(searchTerm) {
  // debugger
    let url = `http://loc.gov/pictures/search/?q=${searchTerm}&fo=json`
    $.ajax({
      method: 'GET',
      url: url,
      dataType: 'jsonp'
    }).done(function(result) {
      // debugger
      if (result.results.length > 0) {
        var image_link = result.results[0].image.full.substr(2)
        var created_published_date = result.results[0].created_published_date
        var creator = result.results[0].creator
        var title = result.results[0].title
        var image = new Image(image_link, created_published_date, creator, title)
        showImage(image)
      } else {
        console.log("no image")
      }
    }).fail(function(err) {
      throw err;
      // debugger
      console.log(err)
    });
  }
