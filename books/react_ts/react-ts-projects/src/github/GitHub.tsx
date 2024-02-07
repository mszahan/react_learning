import { RepoPage } from './RepoPage';
import { GitHeader } from './GitHeader';

export default function GitHub() {
    return (
        <div className="github">
            <GitHeader />
            <RepoPage />
        </div>
    );
}
