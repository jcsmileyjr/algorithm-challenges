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

export const decodedValue = arrayOfColors => {
  let decodedValue1 = colors[arrayOfColors[0]]; //translate the color in spot 0 into a resistor number
  let decodedValue2 = colors[arrayOfColors[1]]; //translate the color in spot  1into a resistor number
  const answer = decodedValue1.toString() + decodedValue2.toString(); //Add the strings togther
  return Number(answer); //retun the string as a number
};

/** Alternate answer that runs but seems unreadable. Am I wrong?
 * return Number(colors[arrayOfColors[0]].toString() + colors[arrayOfColors[1]].toString());
 */
