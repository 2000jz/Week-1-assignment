/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length){
        return false;
    }
    str1 = str1.sort;
    str2= str2.sort;
    str1= str1.toLowerCase();
    str2 = str2.toLowerCase();
    // if(str1 === str2){
    //     return true;
    // } else {

    //     return false;
    // }
    for(var i =0 ;i<str1.length;i++){
      if(str1.charAt(i) != str2.charAt(i)) return false;
      else return true;
    }
  

}
var x = isAnagram("hello","world");
console.log(x);

module.exports = isAnagram;
