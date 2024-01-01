/* function palindrome(str) {
  //regex sequence regexone.com
  let regx = /[\W_]/g;

  let smallStr = str.toLowerCase().replace(regx, '');

  console.log(smallStr);

  let reversed = smallStr.split('').reverse().join('');
  if (reversed === smallStr) {
    console.log('is palindrome');
    return true;
  } else {
    console.log('is not palindrome');
    return false;
  }
}

palindrome('eye'); */

document.addEventListener('DOMContentLoaded', function () {
  // Pre-fill input with "race car" on page load
  document.getElementById('text-input').value = 'race car';
});

function palindrome(str) {
  // Check if the input is empty
  if (!str.trim()) {
    alert('Please input a value.');
    return;
  }
  // Regex to remove all non-alphanumeric characters
  let originalString = str.replace(/[\W_]/g, '').toLowerCase();

  let strCheck = str
    .toLowerCase()
    .replace(/[\W_]/g, '')
    .split('')
    .reverse('')
    .join('');

  if (originalString === strCheck) {
    return (document.getElementById('result').innerHTML =
      'This is a palindrome.');
  }
  return (document.getElementById('result').innerHTML =
    'This is not a palindrome!');
}
