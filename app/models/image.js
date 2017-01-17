const Image = (function() {
  let id = 0
  return class {
    constructor(image_link, date, creator, title) {
      this.id = ++id
      this.image_link = image_link
      this.date = date
      this.creator = creator
      this.title = title
      store.images = [...store.images, this]
    }
  }
})()
