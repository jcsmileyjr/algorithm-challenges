const rnaToCondons = RNA => {
    return RNA.match(/.{1,3}/g); //split string into substrings of 3
  };
  
  const condonToProteins = condon => {
    if (condon === "AUG") return "Methionine";
    //return protein Methionine
    else if (condon === "UUU" || condon === "UUC") return "Phenylalanine";
    //return protein phenylalanine
    else if (condon === "UUA" || condon === "UUG") return "Leucine";
    //return protien Leucine
    else if (
      condon === "UCU" ||
      condon === "UCC" ||
      condon === "UCA" ||
      condon === "UCG"
    )
      return "Serine";
    //return protien Serine
    else if (condon === "UAU" || condon === "UAC") return "Tyrosine";
    else if (condon === "UGU" || condon === "UGC") return "Cysteine";
    else if (condon === "UGG") return "Tryptophan";
    else if (condon === "UAA" || condon === "UAG" || condon === "UGA")
      return "STOP";
    //Stopping condon for DNA.
    else throw "Invalid codon";
  };
  
  export const translate = RNA => {
    //let protein = []; //empty array to be sent if no array is passed as a parameter
    if (RNA === undefined) {
      return new Array(0);
    }
  
    let condons = rnaToCondons(RNA);
    let aminnoAcids = []; //arrray to hold sequence of names
  
    for (const condon of condons) {
      if (condonToProteins(condon) === "STOP") {
        break;
      }
      aminnoAcids.push(condonToProteins(condon));
    }
    return aminnoAcids;
  };
  
