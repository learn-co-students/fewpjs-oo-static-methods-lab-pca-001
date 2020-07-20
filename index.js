class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(str){
    const exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = []

    let words = str.split(' ')

    for(let i = 0; i < words.length; i++){
      if(i ==0){
        result.push(this.capitalize(words[i]))
      } else {
        if(exceptions.includes(words[i])){
          result.push(words[i])
        } else{
          result.push(this.capitalize(words[i]))
        }
      }
    }
    return result.join(' ')
  }

}