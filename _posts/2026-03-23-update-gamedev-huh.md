---
layout: post
title: "#6 Forgot this existed. An Update"
date: 2026-03-23 00:00:01
tags: Gamedev Blog-Changes Update HTML Blog-Suggestions
categories: Gamedev Blog-Changes
---

## First Order of the Day: What happened?
The short of it: I got bored.
The Long of it: This whole thing Lived and died by my ADHD, so i already kinda knew that pretty soon i'll put down this Project and move on, but this time i didn't just throw it away like so many other things (seriously, its like hundrets of Gigabytes i've just thrown away in the last few years). Luckily for me, i've taken on the habit of keeping things that i've grown fond of, like my forever World in Minecraft, i just leave it for a few Months, and when i feel like playing in it, i just play in it, very nice so far.

## Designing as a Developer 
Let's be frank, the Blog Design Sucks, Jekyll is a nice tool, but it's just not for me, i've already talked about moving to Plain HTML with CSS and working out a System, and that Idea still stands, the General Design would be:

+ index.html
+ blog-list.html
+ blog-view.html
  + personal-entries
    + 1-0-Name.html
    + 2-0-Name.html
    + 2-1-Name.html
  + learnings-entries
    + learnings-view.html
    + 1-0-Name.html
  + images
    + general_use
      + img1.png
      + img2.png
    + entry_1
      + img1.png
    + entry_2
      + img1.png
  + embeds
    + links.html
    + header.html
    + footer.html
  + pages
    + projects.html
    + projects
      + 2d-renderer.html
      + web-game.html


Since i dont want to copy paste the header footer layout for every single blog entry and page, i want to use [html iframe](https://www.w3schools.com/tags/tag_iframe.asp), how i'm exactly gonna do that, no idea, but shouldn't be to hard. I think.

Hopefully the Dynamic Approach using src reassignment with Javascript i have in mind is gonna work, but this [Stackoverflow Entry](https://stackoverflow.com/questions/3730159/changing-iframe-src-with-javascript) gives me hope.

Also with the HTML Migration i will rework the old Entries to look a bit easier on the eyes, if your eyes like Plain HTML.
Personal Entries like infos about the Blog Changes and Learner entries like Information about HTML Status Codes (Please just use the Mozilla Documentation, it looks so much better) will be Split.

## BSP - No Sane Person ever Said
Luckily my Youtube Algorythm still feeds me Videos about game development from time to time, and it was inevitable for me to learn about Binary Space Partitioning, or BSP for short, thanks to [this Video about making an Engine Derived from Source](https://youtu.be/Mm-k149HAPc?si=YCeemCmWdezPYnyS)

Now when you Google Binary Space Partitioning, images like this will show up
![The Unholy Grail](https://groups.csail.mit.edu/graphics/classes/6.838/S98/meetings/m13/bsp_raytrace.gif)

and you probably will just close the Window and go on your merry way like a normal person, but since the one writing this blog is not sane, i kept looking into it.
Explaining all that would burst this Posts scope so hard, so i made a whole page for it: 
> [Binary Space Partitioning](/learnings/binary_space_partitioning.html)

### Thanks for Reading


**Sources for BSP:** 
  - [MIT CSAIL - Meeting 13](https://groups.csail.mit.edu/graphics/classes/6.838/S98/meetings/m13/main.html)
  - [Video by Elgen Channel about Game Development](https://youtu.be/Mm-k149HAPc?si=YCeemCmWdezPYnyS)


**Other Interesting Links:**
  - [Fruitfly Blog](https://38leinad.wordpress.com/) 
    - [Their Current Website](https://dplatz.de/)

##### No Comment Issue, maybe Implementing a comment System in the far far future
