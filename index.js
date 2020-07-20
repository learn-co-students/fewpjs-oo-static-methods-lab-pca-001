class Formatter {
  //add static methods here
  static capitalize(str){
    return str.length <= 1 ? str.toUpperCase() : str
      .split(' ')
      .map( x => x[0].toUpperCase() + x.slice(1))
      .join(' ');
  }

  static sanitize(str){
    if(str.length <= 1 ){
      return str.match(/[a-zA-Z0-9\s]/) ? str : '';
    }
    return str.split(' ')
    .map( x=> x.split('').filter( y => y.match(/[a-zA-Z0-9\'\-]/)).join('') )
    .join(' ');
  }

  static titleize(str){

    if(str.length <= 1 ){
      return str.toUpperCase();
    } else {
      str = str[0].toUpperCase() + str.slice(1);
      const arr = str.split(' ');
      return arr.map( word => {
        if(word.length > 2 && (word !== 'the' & word !== 'for' && word !== 'and' &&word !== 'but' && word !== 'from')){
          return this.capitalize(word);
        }else {
          return word;
        }
      })
      .join(' ');
    }

  }

}