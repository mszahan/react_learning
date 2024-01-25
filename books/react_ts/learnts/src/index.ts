// let products : number = 3234;
let products = 3234;

// let course : string = 'learn typescript';
let course = 'learn typescript';

// let is_published : boolean = true;
let is_published = true;

let ann;

let hola = {
    name:'hola',
    bal: 23,
    chal: 2.0
}

let dola = [2, 'fuck', false, 'roma']

// tuples
// it's a regular javascript array
let user: [number, string] = [4, 'rebecca'];


// enum 
// if you use const like this const enum Size
// then js will be really short
enum Size {Small =1, Medium, Large};
let mySize = Size.Medium;
console.log(mySize)


// Functions

function calculatePrice(unitPrice: number, tax:number): number {

    if (unitPrice < 250){
        return unitPrice * 1.5 +tax;
    }
    return unitPrice * 3.5 + tax;
}

calculatePrice(55, 120)


// object
// readonly makes the element immutable
// ? mark makes the element optional
let employe: {
    readonly id: number,
    name: string,
    isActive?:boolean,
    retire: (data: Date) => void

} = {
    id: 1,
    name: 'Alex',
    isActive: false,
    retire: (date: Date) => {
        return console.log(date);
    }

    
}


// use type aliase to do the same thing with object
type Employee = {
    readonly id: number,
    name: string,
    isActive?:boolean,
    retire: (data: Date) => void
}

 let newEmployee: Employee = {
    id: 1,
    name: 'Alex',
    isActive: false,
    retire: (date: Date) => {
        return console.log(date);
    } 
}