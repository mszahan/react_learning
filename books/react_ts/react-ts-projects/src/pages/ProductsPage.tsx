import { Link } from "react-router-dom";
import { products } from "../data/products";

export function ProductsPage() {
    return (
        <div className="text-center p-5">
            <h2 className="text-xl font-bold text-slate-600">
                The Products page
            </h2>
            <ul className="list-none m-0 p-0">
                {
                    products.map(product => (
                        <li key={product.id}>
                            <Link 
                            to={`${product.id}`}
                            className="p-1 text-base text-slate-800"
                            >
                                {product.name}
                            </Link>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}