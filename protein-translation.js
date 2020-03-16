const rnaToCondons = RNA => {
  return RNA.match(/.{1,3}/g); //split string into substrings of 3
};

//Check if a "STOP" sequence matches the given codon
const ifStopSequence = condon => {
  const stopSequence = ["UAA", "UAG", "UGA"];
  for (let sequence of stopSequence) {
    if (sequence === condon) {
      return "STOP";
    }
  }
};

const condonToProteins = condon => {
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

  let foundProtein = "";

  //check each key in the lookup object against the condon, if there is a match, then mark as found
  for (let sequence in proteins) {
    if (condon === sequence) {
      foundProtein = proteins[sequence];
      break;
    }
  }

  //if the foundProtein is stil empty, throw a error. Else return the found protein
  if (foundProtein === "") {
    throw "Invalid codon";
  } else {
    return foundProtein;
  }
};

export const translate = RNA => {
  //Check if the RNA is empty, if so return a empty array
  if (RNA === undefined) {
    return [];
  }

  let condons = rnaToCondons(RNA); //break down RNA string into an array of codons
  let aminnoAcids = []; //arrray to hold sequence of names

  //Check each condon to see: if a "stop" sequence or a "protein" sequence
  for (const condon of condons) {
    if (ifStopSequence(condon) === "STOP") {
      break;
    }
    aminnoAcids.push(condonToProteins(condon));
  }
  return aminnoAcids; //return array of of proteins
};

  
