const Article = (function() {
  let id = 0
  return class {
    constructor(headline, snippet, web_url) {
      this.id = ++id
      this.headline = headline
      this.snippet = snippet
      this.web_url = web_url
      store.articles = [...store.articles, this]
    }
  }
})()
