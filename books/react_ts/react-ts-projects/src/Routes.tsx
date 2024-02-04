import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import App from "./App";
import { ProductPage } from "./pages/ProductPage";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { ThanksPage } from "./pages/ThanksPage";
import { PostPage } from "./posts/PostPage";

const AdminPage = lazy(() => import('./pages/AdminPage'));

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },

            {
                path: 'products',
                element: <ProductsPage/>,
            },
            
            {
                path: 'products/:id',
                element: <ProductPage/>,

            },

            {
                path: '/posts',
                element: <PostPage/>,
            },

            {
                path: 'contact',
                element: <ContactPage/>,
                // action: contactPageAction,
            },

            {
                path: '/thank-you/:name',
                element: <ThanksPage/>
            },

            {
                path: 'admin',
                element: (
                    <Suspense
                    fallback={
                        <div className="text-center p-5 text-xl text-slate-900">
                            Loading..
                        </div>
                    }
                    >
                        <AdminPage/>
                    </Suspense>
                )
            }
        ]
    },

]);

export function Routes() {
    return <RouterProvider router={router}/>
}