// ingeritence means to inherit some traits from parents

// suppose we have  a class a having some methods and properties

// and we have another classs b having some properties and methods

// now we want that our class b wants to use properties and methods of class a 
// so the term inhertince came here
// class a has to be parent  or base
// class b has to be child or derived
// we use class b extends class a name 
// when we make the object of b class it will also acces the properties of class a means the parremt class
 
// syntax 
class a{       // parent class    base class

    constructor(){
        let name;


    }
    methods1(){
        console.log("hey i am the metod of parent class")

    }
}

class b extends a{     // child classs   derived class    using keyword extends
    method2(){
console.log("hey i am the method of the derived class")
    }
}


let obj = new a();  //obejct of parent class 

obj.methods1(); // method and object of parent class

let obj2=new b();   // object of child class pr inhertied or derived class

obj2.method2();  // method call of class child 

// lets call the method of parent class by the object of chuld class

console.log("calling method of parent class from child class")

obj2.methods1();     // calling the method of the parent classs by the object of child class

obj2.name="Cristiano-Ronaldo";

console.log(obj2.name)   // yes we can also acces the property of the parent class through the object of derived or chld class
