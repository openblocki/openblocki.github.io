import { PostMeta } from "../models/post_data.js";
import { Octokit } from "https://esm.sh/@octokit/rest";

const octokit = new Octokit(); 

async function getAllPostMetadata(owner, repo, branch, directory = "data") {
  const response = await octokit.repos.getContent({
    owner,
    repo,
    path: directory,
    ref: branch
  });

  const jsonFiles = response.data.filter(item => item.type === "file" && item.name.endsWith(".json"));

  const posts = [];
  for (const file of jsonFiles) {
    const fileResponse = await octokit.repos.getContent({
      owner,
      repo,
      path: file.path,
      ref: branch
    });

    const decoded = atob(fileResponse.data.content);
    const json = JSON.parse(decoded);

    const postMeta = new PostMeta(json.releaseDate, json.title, json.tags, json.id);
    posts.push(postMeta);
  }

  return posts;
}

export { getAllPostMetadata };