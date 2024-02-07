import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, defer } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProductsPage } from './pages/ProductsPage';
import App from './App';
import { ProductPage } from './pages/ProductPage';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { ThanksPage } from './pages/ThanksPage';
import { PostPage } from './posts/PostPage';
import ConflictPage from './pages/ConflictPage';
import { getPosts } from './posts/getPosts';
import GitHub from './github/GitHub';

const AdminPage = lazy(() => import('./pages/AdminPage'));
const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },

            {
                path: 'products',
                element: <ProductsPage />,
            },

            {
                path: 'products/:id',
                element: <ProductPage />,
            },
            {
                path: 'products/:conflict',
                element: <ConflictPage />,
            },

            {
                path: '/posts',
                element: <PostPage />,
                loader: async () => {
                    const existingData = queryClient.getQueryData(['postData']);
                    if (existingData) {
                        return defer({ posts: existingData });
                    }
                    return defer({
                        posts: queryClient.fetchQuery({
                            queryKey: ['postData'],
                            queryFn: getPosts,
                        }),
                    });
                },
            },

            {
                path: 'contact',
                element: <ContactPage />,
                // action: contactPageAction,
            },

            {
                path: 'github',
                element: <GitHub />,
            },

            {
                path: '/thank-you/:name',
                element: <ThanksPage />,
            },

            {
                path: 'admin',
                element: (
                    <Suspense
                        fallback={
                            <div className="text-center p-5 text-xl text-slate-900">Loading..</div>
                        }
                    >
                        <AdminPage />
                    </Suspense>
                ),
            },
        ],
    },
]);

export function Routes() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
}
