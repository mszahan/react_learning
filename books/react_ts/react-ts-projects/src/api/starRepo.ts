export const STAR_REPO = `
    mutation ($repoID: ID!) {
        addStar(input: {starrableId: $repoId}) {
            starrable {
                stargazers {
                    totalCount
                }
            }
        }
    }
`;

export async function starRepo(repoId: string) {
    const response = await fetch(import.meta.env.VITE_GITHUB_URL!, {
        method: 'POST',
        body: JSON.stringify({
            query: STAR_REPO,
            variables: {
                repoId,
            },
        }),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${import.meta.env.VITE_GITHUB_PAT}`,
        },
    });
    await response.json();
}
