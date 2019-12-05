class Animal {

    constructor() {
      if (this.constructor == Animal) {
        throw new Error("Abstract classes can't be instantiated.");
      }
    }
  
    say() {
      throw new Error("Method 'say()' must be implemented.");
    }
  
    eat() {
      console.log("eating");
    }
  }

  class Dog extends Animal {
    say() {
      console.log("bark");
    }
  }

  class Cat extends Animal {
    say() {
      console.log("meow");
    }
  }

  class Horse extends Animal {}

  class Book {
    constructor(title, author) {
        if (this.constructor === Book) {
            throw new TypeError('Do not attempt to directly instantiate an abstract class.'); 
        }
        else {
            this.title = title;
            this.author = author;
        }
    }
    
    display() {
        //throw new Error ('Implement the \'display\' method!')
        console.log('Implement the \'display\' method!')
    }
}

class MyBook extends Book {
    constructor (title, author, price)
    {
        super (title, author)
        this.price = price
    }

    display()
    {
        console.log("Title: " + this.title)
        console.log("Author: " + this.author)
        console.log("Price: " + this.price)
    }
}

new Dog().eat(); // eating
new Cat().eat(); // eating
new Horse().eat(); // eating

new Dog().say(); // bark
new Cat().say(); // meow
//new Horse().say(); // Error: Method say() must be implemented.

//new Animal();

let book = new MyBook("Zzz", "Xxx", "30")
book.display()