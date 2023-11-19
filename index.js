class Tree {
    constructor(species) {
      this.species = species;
    }
  
    static definition() {
      return 'A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.';
    }
  }
  
  class Deciduous extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  
    static definition() {
      return `${super.definition()} Deciduous trees shed their leaves annually.`;
    }
  }
  
  class Evergreen extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  
    static definition() {
      return `${super.definition()} Evergreens keep their leaves all year round.`;
    }
  }
  
  // Testing the classes
  const oak = new Deciduous('Oak', 'White Oak');
  console.log(oak.species); // Output: Oak
  console.log(oak.name); // Output: White Oak
  console.log(Deciduous.definition()); // Output: A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Deciduous trees shed their leaves annually.
  
  const pine = new Evergreen('Pine', 'Scots Pine');
  console.log(pine.species); // Output: Pine
  console.log(pine.name); // Output: Scots Pine
  console.log(Evergreen.definition()); // Output: A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Evergreens keep their leaves all year round.
  