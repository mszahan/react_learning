import { useQuery } from '@tanstack/react-query';
import { getViewer } from '../api/getViewer';

export function GitHeader() {
    const { isLoading, data } = useQuery({ queryKey: ['viewer'], queryFn: getViewer });

    if (isLoading || data === undefined) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <header className="flex flex-col items-center text-slate-900 h-40 p-5">
            <img src={data.viewer.avatarUrl} alt="Viewer" className="rounded-full w-16 h-16" />
            <div>{data.viewer.name}</div>
            <h1 className="text-xl font-bold">Github Search</h1>
        </header>
    );
}
