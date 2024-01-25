// learing the interface alias
interface Purchase { (quantity: number): void}

interface Product {
    name:string;
    unitPrice?:number;
    purchase?: Purchase
}


let table: Product = {
    name: 'Table',
    purchase: (quantity) => 
        console.log(`Purchased ${quantity} tables`)
}

// you can extend an interface from another one
interface DiscountedProduct extends Product {
    discount: number;
}

let chairOnSale: DiscountedProduct = {
    name: 'Chair on sale',
    unitPrice: 30,
    discount: 5
}