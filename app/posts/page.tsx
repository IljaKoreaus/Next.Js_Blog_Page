import Link from "next/link";

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export default async function PostsMainPage() {

    // Dummy posts
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return (
        <div className="space-y-8">
            <section className="space-y-8">
                <h1 className="text-center text-4xl font-semibold text-zinc-950 sm_text-5xl">
                    Posts
                </h1>

                <ul>
                    {posts.slice(0, 5).map((post: Post) => (
                        <li key={post.id}>
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center
                            sm:justify-between">
                                <Link href={`/posts/${post.id}`} className="text-lg font-semibold text-zinc-950 
                                hover:text-gray-500">
                                    {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}