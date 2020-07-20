class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string) {
    const nonCapWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    const stringArray = string.split(" ")
    let title = []

    title.push(Formatter.capitalize(stringArray[0]))
    stringArray.slice(1).forEach(word => {
      if (nonCapWords.includes(word)) {
        title.push(word)
      } else {
        title.push(Formatter.capitalize(word))
      }
    })
    return title.join(" ")
  }
}