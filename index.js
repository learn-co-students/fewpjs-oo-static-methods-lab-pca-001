class Formatter {
  //   Write a method static capitalize that takes in a string and capitalizes the first letter.
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }
  // Write a method static sanitize that takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces.

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9\-'\s]/g,"")
  }
  // Write a method static titleize that takes in a string and capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.
  static titleize(string) {
    let strings = string.split(" ")

    return strings.map((string, i) => {
      let str = string
      if (!["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"].includes(string)){
        str = this.capitalize(str)
      }
      if (i === 0) {
        str = this.capitalize(str)
      }
      return str
    }).join(" ")
  }
}