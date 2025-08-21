---
layout: post
title: "#5 New Site an Github Restrictions"
date: 2025-08-21 00:00:01
tags: Blog-Update GitHub
---

## First Order of the Day: Using GitHub as a Database
Good Morning Friends, how are you doing.
So Yesterday i basically Finished the first Version of the new Blog, it looks hella Awesome and the Formating of the Posts is definitly not wrong and kinda deformed.
As some may know, i plan on using GitHub branches as a Database to Store Posts, Images and other Stuff that may be Updated at any time, but there is one tiny little problem: **GitHub API Rate Limits**, which is for unauthorized Request 60 calls an Hour. Of course that wouldn't make a difference for me at this time since nobody reads these, but it would be nice to raise these a bit. So i'm currently looking for another Solution, currently im between using a GitHub OAuth App for users to log in, which i dont really want to do since i want this to be a nice and Smooth experience, and second is key injection through GitHub workflows, by storing the key in a Privated Repository, and then getting that key during build time, i might be able to use a API Token out off some appsettings without making any Secrets Public hopefully, even if, that key would only have read access to public repos so, it wouldn't be any problem. Hopefully. 
=> Just checked out the Token Injection. Wouldn't work because GitHub scans for them, anyway, gonna find a way to use GitHub OAuth

## The new Site
It's Up!!! Well, not actually, it was up but i had to revert it to jekyll because of the rate limit. But during the Time it was up, it looked awesome. I would show some Pictures but i'm to lazy to make one right now :3.

Also, i have no idea what's up with the Footer. Gotta live with that until the site migration

That's all folk, Comment Issue will follow later
