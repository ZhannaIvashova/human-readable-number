const dataNumber = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
}

function checkNumlessHundred(number) {
  const listNumber = String(number).split('').map(Number)
  if ((0 <= number && number <= 20) || (listNumber.length === 2 && listNumber[1] === 0)) {
      return dataNumber[number]
  }

  if (listNumber.length === 2) {
      const itemFirst = dataNumber[Number(String(listNumber[0]) + '0')] + ' ' + dataNumber[listNumber[1]];
      return itemFirst
  }
}

module.exports = function toReadable (number) {
  const listNumber = String(number).split('').map(Number);

    if (listNumber.length < 3) return checkNumlessHundred(number);
    else if (listNumber.length === 3) {
        const itemFirst = dataNumber[listNumber[0]];
        if (listNumber[1] === 0 && listNumber[2] === 0) return `${itemFirst} hundred`
        else if (listNumber[1] === 0 && listNumber[2] > 0) {
            const resultNumber = checkNumlessHundred(listNumber[2]);
            return `${itemFirst} hundred ${resultNumber}`
        } else {
            const resultNumber = checkNumlessHundred((listNumber.slice(-2)).map(String).join(''));
            return `${itemFirst} hundred ${resultNumber}`
        }
    }
    return 'ошибка'
}

