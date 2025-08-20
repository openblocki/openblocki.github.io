import { getAllPostMetadata } from "./js/services/postMetaService.js"; 
import { PostMeta } from "./js/models/post_data.js";
import { Octokit } from "https://esm.sh/@octokit/rest";
const list = document.getElementById("post-list");

console.log("main.js loaded");

const owner = "openblocki";
const repo = "openblocki.github.io";
const branch_posts = "blogPosts";
const directory_posts = "posts";
const directory_posts_data = "data";
const octokit = new Octokit();

async function getPostMetadata() {
    const postMeta = await getAllPostMetadata(owner, repo, branch_posts, directory_posts_data);
    console.log("Post metadata fetched:", postMeta);
    return postMeta;
}

const posts = await getPostMetadata().catch(error => {
    console.error("Error fetching post metadata:", error)});

async function renderFileList() {
    const files = posts;
    files.forEach(file => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `views/post.html?id=${file.id}`;
        a.textContent = file.title;
        li.appendChild(a);
        list.appendChild(li);
    });

    console.log(files)
}

await renderFileList().catch(error => {
    console.error("Error rendering file list:", error);
});
