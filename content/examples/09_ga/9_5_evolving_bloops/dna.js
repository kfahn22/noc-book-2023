// Evolution EcoSystem
// Daniel Shiffman <http://www.shiffman.net>

// Class to describe DNA
// Has more features for two parent mating (not used in this example)

// Constructor (makes a random DNA)
class DNA {
  constructor(newgenes) {
    if (newgenes) {
      this.genes = newgenes;
    } else {
      // The genetic sequence
      // DNA is random floating point values between 0 and 1 (!!)
      this.genes = new Array(1);
      for (let i = 0; i < this.genes.length; i++) {
        this.genes[i] = random(0, 1);
      }
    }
  }

  copy() {
    let newgenes = this.genes.slice();
    return new DNA(newgenes);
  }

  // Based on a mutation probability, picks a new random character in array spots
  mutate(mutationRate) {
    for (let i = 0; i < this.genes.length; i++) {
      if (random(1) < mutationRate) {
        this.genes[i] = random(1);
      }
    }
  }
}
