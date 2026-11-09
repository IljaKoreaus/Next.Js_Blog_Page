import {cookies} from "next/headers"

export default async function RecentlyViewedPosts() {

    const cookiesStore = await cookies(); 
    const recentlyViewedPosts = cookiesStore.get("recentlyViewedPosts");

    // Artificial Timeout For Testing Functionality
    await new Promise((resolve) => setTimeout(resolve, 5000));

    return (
        <div>
            <h1>Recently Viewed Posts</h1>
            <ul>
                {recentlyViewedPosts ? (
                    JSON.parse(recentlyViewedPosts.value).map(
                        (post: {id: number, title: string}) => (
                            <li key={post.id}>{post.title}</li>
                        )
                    )
                ) : (<p>No Recently Viewed Posts.</p>)}
            </ul>
        </div>
    );
}