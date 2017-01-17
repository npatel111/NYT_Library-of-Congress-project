function createImage(obj) {
    var image_link = obj[0].image.full.substr(2)
    var date = obj[0].created_published_date
    var creator = obj[0].creator
    var title = obj[0].title
    var image = new Image(image_link, date, creator, title)
    showImage(image)
}
