/*
Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

--- Example ---
RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000

*/

class RomanNumerals {
  getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  
  static numObj = {
    1:"I", 
    5:"V", 
    10:"X", 
    50:"L", 
    100:"C", 
    500:"D", 
    1000:"M"
  }
  getZeroDigitStr(arr, idx) {
    let digit = ""
    for (let i = idx, len = arr.length; i<len; i++) {
      digit += "0"
    }
    return digit;
  }
  getSumOfDigit(arr, idx){
    
    this.numObj
  }
  static toRoman(arabic) {
    const numArr = arabic.toString().split("")
    
    this.numObj[numArr[0]+"000"]
  }
  
  static fromRoman(roman) {
    
  }
}

/*
	아직 푸는 중...
*/
