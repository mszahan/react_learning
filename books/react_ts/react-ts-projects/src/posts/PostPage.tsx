import { useEffect, useState } from "react";
import { getPosts } from "./getPosts";
import { PostData } from "./types";
import { PostList } from "./PostList";

export function PostPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState<PostData[]> ([]);

    useEffect(() => {
        let cancel = false;
        getPosts().then(data => {
            if (!cancel) {
                setPosts(data);
                setIsLoading(false);
            }
        })
        return () => {
            cancel = true;
        }
    });

    if (isLoading) {
        return (
            <div className="w-96 mx-auto mt-6">
                Loading..
            </div>
        )
    }

    return (
        <div className="w-96 mx-auto mt-6">
            <h2 className="text-xl text-slate-900 font-bold">
                Posts
            </h2>

            <PostList posts={posts}/>

        </div>
    )
}