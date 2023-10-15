function isPalindrome(word) {
  // Write your algorithm here

  // Remove any non-letter characters and convert to lowercase
  str = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  
  // Reverse the string
  const reversedStr = str.split("").reverse().join("");
  
  // Check if the reversed string is the same as the original string
  return str === reversedStr;
}

// Test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Was it a car or a cat I saw?")); // true


  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));


module.exports = isPalindrome;
