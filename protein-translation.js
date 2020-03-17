const rnaToCondons = RNA => {
  return RNA.match(/.{1,3}/g); //split string into substrings of 3
};

//Check if a "STOP" sequence matches the given codon
const ifStopSequence = (codon, stopSequence) => {
  if (stopSequence.includes(codon)) {
    return "STOP";
  }
};

//Check if the current codon is a valid sequence, if so, then return the approiate protein name
const codonToProtein = (codon, proteins) => {
  if (proteins[codon]) {
    return proteins[codon];
  } else {
    throw "Invalid codon";
  }
};

export const translate = RNA => {
  //List of protiens by their codon names
  const proteins = {
    AUG: "Methionine",
    UUU: "Phenylalanine",
    UUC: "Phenylalanine",
    UUA: "Leucine",
    UUG: "Leucine",
    UCU: "Serine",
    UCC: "Serine",
    UCA: "Serine",
    UCG: "Serine",
    UAU: "Tyrosine",
    UAC: "Tyrosine",
    UGU: "Cysteine",
    UGC: "Cysteine",
    UGG: "Tryptophan"
  };

  //List of STOP sequence use to end a series of proteins creatign a unquie animo acid
  const stopSequence = ["UAA", "UAG", "UGA"];

  //Check if the RNA is empty, if so return a empty array
  if (RNA === undefined) {
    return [];
  }

  let codons = rnaToCondons(RNA); //break down RNA string into an array of codons
  let aminnoAcids = []; //arrray to hold sequence of names

  //Check each condon to see: if a "stop" sequence or a "protein" sequence
  for (const codon of codons) {
    if (ifStopSequence(codon, stopSequence) === "STOP") {
      break;
    }
    aminnoAcids.push(codonToProtein(codon, proteins));
  }
  return aminnoAcids; //return array of of proteins
};
