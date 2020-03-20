export const reverseString = (word = "") => {
  if (word === "") {
    return word;
  }
  //split string into a array, reverse the array, then join the array into a string
  return word
    .split("")
    .reverse()
    .join("");
};
