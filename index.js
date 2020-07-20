class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    //  do not cap the, a, an, but, of, and, for, at, by, from
    // cap first word
    let except = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let capitalizedTitle = []
    let arrayOfWords = string.split(" ")

    capitalizedTitle.push(this.capitalize(arrayOfWords[0]))
    let restOfTitle = arrayOfWords.slice(1)
    for(const word of restOfTitle) {
      if (except.includes(word)) {
        capitalizedTitle.push(word)
      } else {
        capitalizedTitle.push(this.capitalize(word))
      }
    }
    return capitalizedTitle.join(" ")
  }
}