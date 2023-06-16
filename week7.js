// 1
function either404(numbers) {
    let zeroAdjacent = false;
    let fourAdjacent = false;
  
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] === 0 && numbers[i + 1] === 0) {
        zeroAdjacent = true;
      }
  
      if (numbers[i] === 4 && numbers[i + 1] === 4) {
        fourAdjacent = true;
      }
  
      if (zeroAdjacent && fourAdjacent) {
        return false;
      }
    }
  
    return zeroAdjacent || fourAdjacent;
    
  }

// 2
function outsideIn(outside, inside) {
    for (let i = 0; i < inside.length; i++) {
      if (!outside.includes(inside[i])) {
        return false;
      }
    }
    return true;
  }
    
// 3  

function uniquePalindromeSubstrings(str) {
    const result = new Set();
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        const substring = str.slice(i, j);
        if (isPalindrome(substring)) {
          result.add(substring);
        }
      }
    }
    return Array.from(result).sort();
  }
  
  function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }
  
 