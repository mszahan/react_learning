export default async function BlogPostPage ({params}: {params: Promise<{slug: string}>}) {
    const {slug} = await params

    return (
        <div className="blog-detail">
            <h1>Title of the article</h1>
            <h1> {slug} of the article</h1>
            <p>Content of the blog</p>
        </div>
    )
}