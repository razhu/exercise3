const mainAmountToWords = (number) => {
  if (number === 0) return "zero";
  let words = "";

  if ((number / 1000) > 1) {
    words += mainAmountToWords(parseInt(number / 1000)) + " thousand ";
    number %= 1000;
  }
  if ((number / 100) > 1) {
    words += mainAmountToWords(parseInt(number / 100)) + " hundred ";
    number %= 100;
  }
  if (number > 0) {
    const units = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    const tens = ["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    if (number < 20) {
        words += units[number];
    } else {
      words += tens[parseInt(number / 10)];
      if (number % 10 > 0) words += " " + units[number % 10];
    }
  }
  return words;
}

const determineAmount = (fullAmount) => { // fullAmount = $2523.04
    let [mainAmount, cents] = fullAmount.split('.'); // separating main amount from cents
    mainAmount = mainAmount.substring(1); // removing $
    return `${mainAmountToWords(parseInt(mainAmount))} and ${cents}/100 dollars`
}

module.exports = determineAmount;
