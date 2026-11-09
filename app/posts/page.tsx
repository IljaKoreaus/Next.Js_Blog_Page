import RecentlyViewedPosts from "@/components/recentlyViewedPosts";
import { getPosts } from "@/lib/utils";
import { cacheLife } from "next/cache";
import Link from "next/link";
import { Suspense } from "react";
import {createPost} from "@/actions/actions"

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export default async function PostsMainPage() {

    const posts = await getPosts();

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

                <section className="space-y-4 border-t border-zinc-200 pt-6">
                    <h2 className="text-xl font-semibold text-zinc-950">New Posts</h2>
                    <form action={createPost} className="space-y-4">
                        <label className="block space-y-2">
                            <span className="text-sm font-medium text-zinc-700">Title</span>
                            <input
                                name="title"
                                type="text"
                                required
                                className="h-10 w-full rounded-md border border-zinc-300 bg-zinc-50 px-3 text-black transition-colors focus:border-zinc-500"
                            />
                        </label>

                        <label className="block space-y-2">
                            <textarea
                                name="content"
                                required
                                className="h-10 w-full rounded-md border border-zinc-300 bg-zinc-50 px-3
                                text-black transition-colors focus:border-zinc-500"
                            />
                        </label>

                        <button className="border-2 rounded-md border-zinc-300 p-2 hover:cursor-pointer bg-black text-white">
                            Create
                        </button>
                    </form>
                </section>
                
                <Suspense fallback={<p>Loading Recently Viewed Posts...</p>}>
                    <RecentlyViewedPosts/>
                </Suspense>

            </section>
        </div>
    );
}