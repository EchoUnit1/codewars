// First non-repeating character
// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

function firstNonRepeatingLetter(s) {
  return s.toLowerCase().lastIndexOf(s.toLowerCase().charAt(0)) !== 0
    ? firstNonRepeatingLetter(s.replace(new RegExp(s.charAt(0), 'g'), ''))
    : s.charAt(0);
}
