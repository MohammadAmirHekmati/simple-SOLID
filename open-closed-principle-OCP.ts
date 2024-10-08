interface Shape {
    area(): number;
  }
  
  class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}
  
    area(): number {
      return this.width * this.height;
    }
  }
  
  class Circle implements Shape {
    constructor(private radius: number) {}
  
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  function printArea(shape: Shape) {
    console.log(shape.area());
  }
  
  const rectangle = new Rectangle(10, 20);
  const circle = new Circle(5);
  
  printArea(rectangle); // 200
  printArea(circle);    // 78.5
  