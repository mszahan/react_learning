export type ViewerData = {
    name: string;
    avatarUrl: string;
};

export type SearchCriteria = {
    org: string;
    repo: string;
};

export type RepoData = {
    repository: {
        id: string;
        name: string;
        description: string;
        viewerHasSatrred: boolean;
        stargazers: {
            tottalCount: number;
        };
    };
};
