const BLACK_LIST = [
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999'
];

const isLengthValid = cpf => cpf.length === 11;

const isFirstDigitValid = (firstNineDigits, firstVerifierDigit) => {
  let sum = 0;

  for (let idx = 0; idx < firstNineDigits.length; idx++) {
    sum += firstNineDigits[idx] * (10 - idx);
  }

  let rest = (sum * 10) % 11;
  if (rest === 10) rest = 0;

  return rest == firstVerifierDigit;
};

const isSecondDigitValid = (firstTenDigits, secondVerifierDigit) => {
  let sum = 0;

  for (let idx = 0; idx < firstTenDigits.length; idx++) {
    sum += firstTenDigits[idx] * (11 - idx);
  }

  let rest = (sum * 10) % 11;
  if (rest === 10) rest = 0;

  return rest == secondVerifierDigit;
};

const isValid = cpf => {
  const cpfFormatted = cpf.replace(/\D/g, '');

  if (!isLengthValid(cpfFormatted)) return false;

  if (BLACK_LIST.includes(cpfFormatted)) return false;

  const firstNineDigits = cpfFormatted.substring(0, 9);
  const firstVerifierDigit = cpfFormatted.substring(9, 10);

  if (!isFirstDigitValid(firstNineDigits, firstVerifierDigit)) return false;

  const firstTenDigits = cpfFormatted.substring(0, 10);
  const secondVerifierDigit = cpfFormatted.substring(10, 11);
  if (!isSecondDigitValid(firstTenDigits, secondVerifierDigit)) return false;

  return true;
};

module.exports = {
  isValid
};
