import apiClient from "./apiClient";

export async function receivePostData(postId){
// Check if a valid postId was provided.
  if (!postId) {
    throw new Error('A post ID must be provided.');
  }

  try {
    const response = await apiClient.get(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    // console.error("Error receiving post data:", error);
    // throw error; // Re-throw the error for further handling if needed
  }

}