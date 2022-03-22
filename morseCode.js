
const words = ["gin","zen","gig","msg"]

var uniqueMorseRepresentations = function(words) {
  const morse = [".-","-...","-.-.","-..",".","..-.","--.",
               "....","..",".---","-.-",".-..","--","-.",
               "---",".--.","--.-",".-.","...","-","..-",
               "...-",".--","-..-","-.--","--.."]

  const letters = ['abcdefghijklmnopqrstuvwxyz'];

  const letterToMorseMap = new Map(morse.map((code, i) => [letters[i], code]));
  console.log('letterToMorseMap', letterToMorseMap);
};

uniqueMorseRepresentations(words);