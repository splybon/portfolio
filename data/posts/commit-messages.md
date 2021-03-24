---
title: Commit Messages
date: 03-01-2021
image: commit.png
path: blog/commit-messages
tag: Coffee Thoughts
---

Coffee Thoughts are a series of slack posts used to generate discussion at my place of work.

I’m about to start on my 5th project here at Skookum, and it seems like every project I’ve worked on has handled commit messages a little differently. Back when I thought there was only 1 right way to do something, my gold standard came from [this article](https://thoughtbot.com/blog/5-useful-tips-for-a-better-commit-message) and I adopted the practice as my own. At the time I would always make sure to leave rambling, multi-line commit messages, and I looked down from my throne of best practices on those who didn’t. However, after an insignificant amount of time, I realized that I was squashing my branches in gitlab before merging, thus erasing all of my beautiful commits in the process. The horror.

Lately I have been writing with [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) prefaced by the ticket number and then hopefully some useful text. Most of the time I keep them to 1 line unless I have something very important to say. So my commits usually look like “TICKET-1234 fix: removing code I wrote yesterday due to incompetence”. I find the ticket number in itself gives a good amount of context. I do love a good commit message though, and I get a little jolt each time one provides some helpful insights.

Are there any patterns you like to see in commit messages? Or is there a time when a commit was particularly helpful in giving context to the code you were inspecting?
