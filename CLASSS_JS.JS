class players{
    constructor(carname,speed){    // properties using parameters
        console.log(`welcome to the pitch `);

        this.carname=carname;   // assigning the value of parameetr to variables
        this.speed=speed;


        let name;    // variables declared or properties
        let sport;

    };

    details(){
        console.log(`my favrurite player is ${this.name} and he plays ${this.sport}`)
    };

    cardetails(status){
        console.log(`hey my fav car is ${this.carname} because it can go upto ${this.speed} and I ${status}`)
    }
};



let obj = new players();    // new object
obj.name="cristiano Ronaldo";    // metghod called
obj.sport="Football";

obj.details();

let obj2=new players();
obj2.name="Messi";
obj2.sport="Football";
obj2.details();


let carobj=new players("BMW M5" ,300);     // new object and assigning the values to the parameter of the constructor method

carobj.cardetails("Love it");    // calling a method and assign the vaue or passing argument to the method'S parameter;




