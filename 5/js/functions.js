const checkLength = (string = '', maxSymbol = 1) => string.length <= maxSymbol;

checkLength();

const verifyPalindrome = (string) => {
  const normalizedString = string.toLowerCase();
  const reversedString = normalizedString.split('').reverse().join('');
  return reversedString === normalizedString;
};

verifyPalindrome();

function stringToNumber(str) {
  return Number(
    [...str].filter((item) => !isNaN(parseInt(item, 20))).join('') || NaN
  );
}

stringToNumber();
