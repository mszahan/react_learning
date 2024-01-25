// class Product {
//     name?:string;
//     unitPrice?:number;
// }

// still showing error
// class Product {
//     name='';
//     unitPrice = 0;
// }



// constructor is required I gues
// cause in each of those example it causeed..
// some sort of error
// still showing errror.........
// class Product {
//     name;
//     unitPrice;

//     constructor(name:string, unitPrice:number) {
//         this.name = name;
//         this.unitPrice = unitPrice;
//     }
// }

// I think this might solve the issue
// the issue was with the variable name which maybe coming from 
// different file

class NewProduct {
    constructor(public name:string, public unit:number) {
        this.name = name;
        this.unit = unit;
    }
}