const Image = (function() {
  let id = 0
  return class {
    constructor(image_link, created_published_date, creator, title) {
      this.id = ++id
      this.image_link = image_link
      this.created_published_date = created_published_date
      this.creator = creator
      this.title = title
      store.images = [...store.images, this]
    }
  }
})()
