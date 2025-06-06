import apiClient from "./apiClient";

export async function sendPost(postLink) {
    try {
        const response = await apiClient.post('/posts', { post_url: postLink });
        return response.data;
    } catch (error) {
        // console.error("Error sending post:", error);
        // throw error; // Re-throw the error for further handling if needed
    }
}