import { PostData } from './types';


export async function getPosts() {
    const response = await fetch(
        import.meta.env.VITE_API_URL!
    );

    const body = (await response.json()) as unknown;
    assertIsPosts(body)
    return body;
}

export function assertIsPosts(
    postData: unknown
): asserts postData is PostData[] {
    if (!Array.isArray(postData)) {
        throw new Error('Posts isn not an array');
    }
    if (postData.length === 0) {
        return;
    }

    postData.forEach((post) => {
        if(!('id' in post)) {
            throw new Error('post does not contain id');
        }
        if (typeof post.id !== 'number') {
            throw new Error('id is not a number')
        }
        if (!('title' in post)) {
            throw new Error("Post does not contain tittle");
        }
        if (typeof post.title !== 'string') {
            throw new Error('title is not string');
        }
        if (!('description' in post)) {
            throw new Error('post does not contian description');
        }
        if (typeof post.description !== 'string') {
            throw new Error('description is not a string')
        }
    })

}