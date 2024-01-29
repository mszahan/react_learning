import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import App from "./App";
import { ProductPage } from "./pages/ProductPage";

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {
                path: 'products',
                element: <ProductsPage/>,
            },
            {
                path: 'products/:id',
                element: <ProductPage/>,
            },
        ]
    },

]);

export function Routes() {
    return <RouterProvider router={router}/>
}