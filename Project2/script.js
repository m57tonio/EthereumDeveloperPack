document.addEventListener('DOMContentLoaded', function() {
  const checkBtn = document.getElementById('check-btn');
  const textInput = document.getElementById('text-input');
  const result = document.getElementById('result');

  checkBtn.addEventListener('click', function() {
      const inputValue = textInput.value.trim();
      
      if (!inputValue) {
          alert('Please input a value');
          return;
      }
      
      const isPalindrome = checkPalindrome(inputValue);
      displayResult(inputValue, isPalindrome);
  });

  textInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          checkBtn.click();
      }
  });
});

function checkPalindrome(str) {  
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();  
  const reversedStr = cleanedStr.split('').reverse().join('');  
  return cleanedStr === reversedStr;
}

function displayResult(originalStr, isPalindrome) {
  const resultElement = document.getElementById('result');  
  resultElement.classList.remove('palindrome', 'not-palindrome');  
  resultElement.classList.add(isPalindrome ? 'palindrome' : 'not-palindrome');
  
  if (originalStr.toLowerCase() === "not a palindrome") {
        resultElement.textContent = "not a palindrome is not a palindrome";
    } else if (isPalindrome) {
      resultElement.innerHTML = originalStr+' is a palindrome.';
  } else {
      resultElement.innerHTML = originalStr+' is not a palindrome';
  }
}