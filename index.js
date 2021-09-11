class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string){
    let words = string.split(' ');
    let result = ''
    let isFirstWord = true;
    let lowerCaseWords = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the']
    words.forEach(word => {
      switch (true){
        case isFirstWord === true:
          result += this.capitalize(word) + ' ';
          isFirstWord = false;
          break;
        case isFirstWord === false && lowerCaseWords.includes(word.toLowerCase()):
          result += word + ' ';
          break;
        default:
          result += this.capitalize(word) + ' ';
      }
    })
    return result.slice(0, result.length-1)
  }
}