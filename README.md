I plan on using different Repos on the Sites github to upload BlogPosts and GameUpdates, with the ```gameUpdates```-Branch containing the images and Markdown files for the Gaming Updates Feed, the ```blogPosts```-Branch containing all BlogPosts and their additional files, and the ```main```-Branch containing the Project files / Website files, that are being deployed.
This decreases actual Artifact size, and might keep Build and Deployment Speed at a minimum. 
In this case this Repository Acts as a readonly Database with the different Branches acting as their own tables. This allows me to Upload and Store and Show Data dynamicaly without needing a proper Backend.
Uploading happens through git Commits, which also makes User Submitions possible in the near Future.


Repo Structure:
```main```: Project Files / WebPage, Issues for Comment System
```gameUpdates```: Images and Descriptions for the Game Updates Page
```blogPosts```: Releases for Blog Posts


```blogPosts```-Branch Structure

```
.
├── README.md -- Post Template
├── assets/
│   ├── post1/
│   │   ├── img1.png
│   │   └── img2.png
│   └── post2/
│       ├── img1.png
│       └── img2.png
├── posts/
│   ├── post1.md
│   └── post2.md
└── data -- Need to try this out before actually using data, don't know if im gonna need it/
    ├── post1.js
    └── post2.js
```


```gameUpdates```-Branch Structure

```
.
├── assets/
│   ├── yyyy-mm-dd-ID.png
│   └── yyyy-mm-dd-ID.png
└── descriptions/
    └── yyyy-mm-dd-ID.md
``` 

Game Updates can have multiple images per MarkDown, no image or no Markdown, don't know how im gonna figure that out.


```main```-Branch Structure
```
.
├── index.html
├── blogBuilder.js
├── README.md
├── assets/
│   ├── site1/
│   │   ├── img1.png
│   │   └── img2.png
│   └── site2/
│       ├── img1.png
│       └── img2.png
├── style/
│   ├── style.css
│   └── style2.css
└── pages/
    ├── games/
    │   ├── pong.html
    │   └── breakout.html
    ├── gamingUpdates/
    │   ├── gamingUpdates.html
    │   └── gamingUpdates.js
    └── updates/
        ├── updates.html -- For Site Updates (planned for near future)
        └── updates.js
```