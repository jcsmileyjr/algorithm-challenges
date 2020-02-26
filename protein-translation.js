

export const translate = (RNA = 0) => {
    let protein = [];//empty array to be sent if no array is passed as a parameter
    return RNA === 0? protein: sequences(RNA);
}

//assigns groups of 3 chars to names of protiens
const sequences = (RNA) => {
    const oldSequence = RNA.match(/.{1,3}/g); //split string into substrings of 3

    let newSequence =[];//arrray to hold sequence of names

    for(var i=0;i<oldSequence.length;i++){
        if(oldSequence[i] === "AUG"){
            newSequence.push('Methionine');
        }else if(oldSequence[i] ==="UUU"){
            newSequence.push('Phenylalanine');
        }else if(oldSequence[i] ==="UUC"){
            newSequence.push('Phenylalanine');
        }else if(oldSequence[i] ==="UUA"){
            newSequence.push('Leucine');
        }else if(oldSequence[i] ==="UUG"){
            newSequence.push('Leucine');
        }else if(oldSequence[i] ==="UCU"){
            newSequence.push('Serine');
        }else if(oldSequence[i] ==="UCC"){
            newSequence.push('Serine');
        }else if(oldSequence[i] ==="UCA"){
            newSequence.push('Serine');
        }else if(oldSequence[i] ==="UCG"){
            newSequence.push('Serine');
        }else if(oldSequence[i] ==="UAU"){
            newSequence.push('Tyrosine');
        }else if(oldSequence[i] ==="UAC"){
            newSequence.push('Tyrosine');
        }else if(oldSequence[i] ==="UGU"){
            newSequence.push('Cysteine');
        }else if(oldSequence[i] ==="UGC"){
            newSequence.push('Cysteine');
        }else if(oldSequence[i] ==="UGG"){
            newSequence.push('Tryptophan');
        }else if(oldSequence[i] ==="UAA"){
            return newSequence;
        }else if(oldSequence[i] ==="UAG"){
            return newSequence;
        }else if(oldSequence[i] ==="UGA"){
            return newSequence;
        }else{
            throw "Invalid codon";
        }
    }

    return newSequence;
}
