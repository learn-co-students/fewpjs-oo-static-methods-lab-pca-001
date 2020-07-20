class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(str){
    const exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let concludes = []

    let words = str.split(' ')

    for(let jawn = 0; jawn < words.length; jawn++){
      if(jawn ==0){
        concludes.push(this.capitalize(words[jawn]))
      } else {
        if(exceptions.includes(words[jawn])){
          concludes.push(words[jawn])
        } else{
          concludes.push(this.capitalize(words[jawn]))
        }
      }
    }
    return concludes.join(' ')
  }

}