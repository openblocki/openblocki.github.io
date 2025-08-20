import { PostMeta } from "../models/post_data.js";
import { Octokit } from "https://esm.sh/@octokit/rest";

const octokit = new Octokit(); 
const postBody = document.getElementById("post-content");

async function getPost(owner, repo, branch,id, directory = "posts") {
  const response = await octokit.repos.getContent({
    owner,
    repo,
    path: directory,
    ref: branch
  });

  const htmlFile = response.data.filter(item => item.type === "file" && item.name === `${id}.html`)[0];
  
  const fileResponse = await octokit.repos.getContent({
      owner,
      repo,
      path: htmlFile.path,
      ref: branch
    });

    return atob(fileResponse.data.content);
}


async function renderPost() {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get("id");
    const post = await getPost("openblocki", "openblocki.github.io", "blogPosts", postId ,"posts");
    postBody.innerHTML = post;
    console.log("Post content fetched:", post);

}

renderPost().catch(error => {
    console.error("Error rendering post:", error);
});