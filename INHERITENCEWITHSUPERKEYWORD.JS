
class employee{
    constructor(name){
        console.log(`hello employyee ${name}`)
    }
};


class manager extends employee{
    constructor(managername){


        super("vikas as a employee");

        console.log(`hey  ${managername} as a manager`) 
//   

// if we have two constructor methjds in class parent and cild and we create objet then then one constructor method will call whoose object is made and other will not cll give us error so we need to sue super keyword
    }
};

let obj = new manager("mr - vikas");