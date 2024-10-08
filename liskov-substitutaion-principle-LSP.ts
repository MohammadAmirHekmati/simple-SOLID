class Bird {
    fly() {
      console.log('Flying');
    }
  }
  
  class Sparrow extends Bird {}
  
  class Ostrich extends Bird {
    fly() {
      throw new Error('Ostriches cannot fly');
    }
  }
  
  function makeBirdFly(bird: Bird) {
    bird.fly();
  }
  
  const sparrow = new Sparrow();
  const ostrich = new Ostrich();
  
  makeBirdFly(sparrow); // Flying
  makeBirdFly(ostrich); // Error: Ostriches cannot fly
  