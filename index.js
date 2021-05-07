class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string){
    let words = string.split(" ")
    let newWords = []
    //let badWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    for(const w of words){
      if (w !== 'the' && w !== 'a' && w !== 'an' && w !== 'but' && w !== 'of' && w !== 'and' && w !== 'for' && w !== 'at' && w !== 'by' &&  w !== 'from'){
        
        newWords.push(w.charAt(0).toUpperCase() + w.slice(1))

      }else {
        
        newWords.push(w)
      }
      
    }
    return newWords.join('').charAt(0).toUpperCase() + newWords.join(' ').slice(1)
  }
}