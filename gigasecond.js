export const gigasecond = givenDate => {
  const gigaseconds = Math.pow(10, 12); //10^3 (milliseconds) * 10^9 (seconds), converting seconds into milliseconds
  return new Date(givenDate.getTime() + gigaseconds); //add 1000 billion milliseconds to the date
};
