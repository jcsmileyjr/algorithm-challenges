const colors = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
};

//translate the color in spot 0 and 1 into a resistor numbers, mulitply spot 0 by 10, then add all numbers
export const decodedValue = arrayOfColors => {
  return colors[arrayOfColors[0]] * 10 + colors[arrayOfColors[1]];
};

/*New alternate answer
  let decodedValue1 = colors[arrayOfColors[0]]; //translate the color in spot 0 into a resistor number
  let decodedValue2 = colors[arrayOfColors[1]]; //translate the color in spot  1into a resistor number
  return decodedValue1 * 10 + decodedValue2;
*/

/** Old Alternate answer
 * return Number(colors[arrayOfColors[0]].toString() + colors[arrayOfColors[1]].toString());
 */
