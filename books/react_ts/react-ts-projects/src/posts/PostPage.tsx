// import { useEffect, useState } from "react";
import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
// import { getPosts } from "./getPosts";
import { NewPostData, PostData } from "./types";
import { PostList } from "./PostList";
import { savePost } from "./savePost";
import { NewPostForm } from "./NewPostForm";
import { assertIsPosts } from "./getPosts";



export function PostPage() {
    const data = useLoaderData();
    assertIsData(data);
    // assertIsPosts(posts)
    // const [isLoading, setIsLoading] = useState(true);
    // const [posts, setPosts] = useState<PostData[]> ([]);

    // useEffect(() => {
    //     let cancel = false;
    //     getPosts().then(data => {
    //         if (!cancel) {
    //             setPosts(data);
    //             setIsLoading(false);
    //         }
    //     })
    //     return () => {
    //         cancel = true;
    //     }
    // });

    async function handleSave(newPostData: NewPostData) {
        await savePost(newPostData);
        // const newPost = await savePost(newPostData);
        // setPosts([newPost, ...posts])
    }

    // if (isLoading) {
    //     return (
    //         <div className="w-96 mx-auto mt-6">
    //             Loading...
    //         </div>
    //     )
    // }

    return (
        <div className="w-96 mx-auto mt-6">
            <h2 className="text-xl text-slate-900 font-bold">
                Posts
            </h2>
            <NewPostForm onSave={handleSave}/>
            <Suspense fallback={<div>Fetching...</div>}>
                <Await resolve={data.posts}>
                    {
                        posts => {
                            assertIsPosts(posts);
                            return <PostList posts={posts}/>
                        }
                    }
                </Await>
            </Suspense>
        </div>
    )
}


type Data = {
    posts: PostData[];
};

export function assertIsData(data: unknown): asserts data is Data {
    if (typeof data !== 'object') {
        throw new Error('Data is not an object');
    }
    if (data === null) {
        throw new Error('Data is null');
    }
    if (!('posts' in data)) {
        throw new Error('Data does not contain posts');
    }
}