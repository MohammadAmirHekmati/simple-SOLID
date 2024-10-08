interface Printer {
    print(): void;
  }
  
  interface Scanner {
    scan(): void;
  }
  
  class AllInOnePrinter implements Printer, Scanner {
    print() {
      console.log('Printing');
    }
  
    scan() {
      console.log('Scanning');
    }
  }
  
  class SimplePrinter implements Printer {
    print() {
      console.log('Printing');
    }
  }
  