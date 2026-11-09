import { cacheLife, cacheTag } from "next/cache";

export const getPosts = async () => {
    "use cache"
    cacheLife("hours");
    cacheTag("posts");

    // Dummy posts
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await response.json();
}

