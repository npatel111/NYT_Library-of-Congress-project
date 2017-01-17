const Term = (function() {
  let id = 0
  return class {
    constructor(searchTerm) {
      this.id = ++id
      this.term = searchTerm
      store.terms = [...store.terms, this]
    }
  }
})()
