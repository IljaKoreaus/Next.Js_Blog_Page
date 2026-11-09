"use server"

import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {

    const title = String(formData.get("title") ?? "").trim();
    const content = String(formData.get("content") ?? "").trim();

    // TODO: Prisma Or PSQL Commands To Add The Post To The Database

    // TODO: Add A PopUp For Giving User Feedback

    revalidatePath("/posts");
}