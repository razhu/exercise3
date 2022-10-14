const determineAmount = require('./amount')
 
test('$2523.04 = two thousand five hundred twenty three and 04/100 dollars', () => {
    expect(determineAmount('$2523.04')).toBe('two thousand five hundred twenty three and 04/100 dollars');
});
test('$999999.99 = nine hundred ninety nine thousand nine hundred ninety nine and 99/100 dollars', () => {
    expect(determineAmount('$999999.99')).toBe('nine hundred ninety nine thousand nine hundred ninety nine and 99/100 dollars');
});
test('$7522.65 = seven thousand five hundred twenty two and 65/100 dollars', () => {
    expect(determineAmount('$7522.65')).toBe('seven thousand five hundred twenty two and 65/100 dollars');
});
test('$0.00 = zero and 00/100 dollars', () => {
    expect(determineAmount('$0.00')).toBe('zero and 00/100 dollars');
});