import { NewPostData, SavedPostData } from "./types";

export async function savePost (
    newPostData : NewPostData
) {
    const response = await fetch (import.meta.env.VITE_API_URL!, {
        method: 'POST',
        body: JSON.stringify(newPostData),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    const body = (await response.json()) as unknown;
    assertIsSavedPost(body);

    return {...newPostData, ...body}
}

function assertIsSavedPost (post:any) : asserts post is SavedPostData {
    if (!('id' in post)) {
        throw new Error('post does not contain id');
    }
    if (typeof post.id !== 'string') {
        throw new Error('id is not string')
    }
}