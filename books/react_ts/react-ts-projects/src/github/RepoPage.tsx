import { useState } from 'react';
import { useLazyQuery, useMutation, useApolloClient } from '@apollo/client';
import { GET_REPO } from '../api/getRepo';
import { STAR_REPO } from '../api/starRepo';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { getRepo } from '../api/getRepo';
// import { starRepo } from '../api/starRepo';
import { SearchCriteria } from '../api/types';
import { SearchRepoForm } from './SearchRepoFrom';
import { FoundRepo } from './FoundRepo';
import { StarRepoButton } from './StarRepoButton';

export function RepoPage() {
    const [searchCriteria, setSearchCriteria] = useState<SearchCriteria | undefined>();
    const [getRepo, { data }] = useLazyQuery(GET_REPO);
    const queryClient = useApolloClient();
    const [starRepo] = useMutation(STAR_REPO, {
        onCompleted: () => {
            queryClient.cache.writeQuery({
                query: GET_REPO,
                data: {
                    repository: {
                        ...data.repository,
                        viewerHasStarred: true,
                    },
                },
                variables: searchCriteria,
            });
        },
    });

    // const { data } = useQuery({
    //     queryKey: ['repo', searchCriteria],
    //     queryFn: () => getRepo(searchCriteria as SearchCriteria),
    //     enabled: searchCriteria !== undefined,
    // });

    // const queryClient = useQueryClient();

    // const { mutate } = useMutation({
    //     mutationFn: starRepo,
    //     onSuccess: () => {
    //         queryClient.setQueryData<RepoData>(['repo', searchCriteria], (repo) => {
    //             if (repo === undefined) {
    //                 return undefined;
    //             }
    //             return {
    //                 ...repo,
    //                 viewerHasStarred: true,
    //             };
    //         });
    //     },
    // });

    function handleSearch(search: SearchCriteria) {
        // setSearchCriteria(search);
        getRepo({
            variables: { ...search },
        });
    }

    function handleStarClick() {
        if (data) {
            // mutate(data.repository.id);
            starRepo({ variables: { repoId: data.repository.id } });
        }
    }

    return (
        <main className="max-w-xs ml-auto mr-auto">
            <SearchRepoForm onSearch={handleSearch} />
            {data && (
                <>
                    <FoundRepo
                        name={data.repository.name}
                        description={data.repository.description}
                        stars={data.repository.stargazers.totalCount}
                    />

                    {!data.repository.viewerHasStarred && (
                        <StarRepoButton onClick={handleStarClick} />
                    )}
                </>
            )}
        </main>
    );
}
