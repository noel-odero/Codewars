function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence

    return dna.split('').map(letter => letter === "T" ? "U": letter).join("")
  }