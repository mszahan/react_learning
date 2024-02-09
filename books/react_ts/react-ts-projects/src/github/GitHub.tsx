// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { RepoPage } from './RepoPage';
import { GitHeader } from './GitHeader';

// const queryClient = new QueryClient();
const queryClient = new ApolloClient({
    uri: import.meta.env.VITE_GITHUB_URL!,
    cache: new InMemoryCache(),
    headers: {
        Authorization: `bearer${import.meta.env.VITE_GITHUB_PAT}`,
    },
});

export default function GitHub() {
    return (
        <ApolloProvider client={queryClient}>
            <GitHeader />
            <RepoPage />
        </ApolloProvider>
    );
}
