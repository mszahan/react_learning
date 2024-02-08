import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RepoPage } from './RepoPage';
import { GitHeader } from './GitHeader';

const queryClient = new QueryClient();

export default function GitHub() {
    return (
        <QueryClientProvider client={queryClient}>
            <GitHeader />
            <RepoPage />
        </QueryClientProvider>
    );
}
