---
layout: post
title: "#3 The Sound of Progress my Friend"
date: 2025-08-19 00:00:02
tags: Blog-Changes JavaScript HTML CSS
---

## Blog Design
First Things First i finally have some Sneak Peeks for the Plans of the Blog / Site Design, which will be heavily
oriented on Websites from the 90s like you can see on [GeoCities](https://geocities.live/).
Here, have a look at the Title and Footer :smile:
![Cool Header](../images/post_3/title.png)
![Cool Footer](../images/post_3/footer.png)
Coolest shit you'll ever see. 

## Dynamic Images make Life worth Living
As mentioned in the last Post, I want to implement a Page for Updates of Progress i make in Games, and because i dont always want to Update and Redeploy the Site just because i want to show you the third 3x3 Piston Door that i built, im gonna implement a way to upload Images to a GitHub Branch [Yes, a Branch just for Images and Descriptions] Have a look at the CodeSnipped i'm gonna orientate on: 
```javascript
  const user = "openblocki";
  const repo = "openblocki.github.io";
  const branch = "gamingUpdates";
  const folder = "images";

  const apiUrl = `https://api.github.com/repos/${user}/${repo}/contents/${folder}?ref=${branch}`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(files => {
      files.forEach(file => {
        if (file.type === "file" && file.download_url) {
          const img = document.createElement("img");
          img.src = file.download_url;
          img.style.maxWidth = "200px";
          img.style.margin = "10px";
          document.getElementById("gallery").appendChild(img);
        }
      });
    })
    .catch(err => console.error(err));
```
Of course this is just Super Rudimentary but im gonna find a way to use this.
That's all from me for now. Kisses

###### [[Comment Issue for this Post]()]
