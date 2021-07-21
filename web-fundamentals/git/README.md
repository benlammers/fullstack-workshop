# Git Workshop

**Table Of Contents**
-  [Purpose](#purpose)
-  [Getting Started](#getting-started)
-  [Sections](#sections)
-  [Further Learning](#further-learning)

## Purpose
This repository contains example files and resources regarding Git and its concepts. This is not meant as a standalone repository for a developer to learn from alone but to be a supplement to a workshop led by someone instructing those involved in these Git concepts.

## Getting Started
### Requirements
- Basic understanding of Git
- Rudimentary bash terminal commands (ls, cd, mkdir, rm -r, etc.)
- Browser such as Chrome, Firefox or Safari

## Sections
Brief description of the goal of each section, important topics in the section and some extra resources available on those topics

### 00 What is Git
**Goal:** Participants should gain a basic understanding of Git.

**Important Points**
- Git is an example of a DVCS (Distributed Version Control System). Rather than have only one single place for the full version history of the software

**Resources**
- https://www.atlassian.com/git/tutorials/what-is-git
- https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F

### 01 Initialize Repository
**Goal:** Participants should gain a basic understanding of how to initialize and clone a repository for a project.

**Important Points**
- the "git init" command creates an empty Git repository - basically a .git directory with subdirectories for objects, refs/heads, refs/tags, and template files. 
- If you want to get a copy of an existing Git repository — the command you need is git clone. Git receives a full copy of nearly all data that the server has.
- Create a .gitignore file to specify file types/folders that do not need to be pushed to the repository (ex. node_modules directories) 

**Resources**
- https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository#ch02-git-basics-chapter


### 02 Pull
**Goal:** Participants should gain knowledge on how to pull updates from a repository to update the local version

**Important Points**
- Go to repository on the internet and copy the ssh link
- Run the command git clone "ssh link"

**Resources**
- https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository#ch02-git-basics-chapter

### 03 Pushing and commiting
**Goal:** Participants should gain knowledge on how to push and commit their changes to a remote repository

**Important Points**
- git add . : adds all new files and changes to remote repository
- git commit -m “enter change message here”: saves your changes to the local repository along with a message that describes the change
- git push origin “branch name”: Uploads local repository content to a remote repository. you transfer commits from your local repository to a remote repo.

**Resources**
- https://rogerdudler.github.io/git-guide/


### 04 Branching and merging
**Goal:** Participants should gain knowledge on how to create branches, the different types of branchs, and merging branches 

**Important Points**
- Branching means you diverge from the main line of development and continue to do work without messing with that main line
- Different types of branching Master, Feature, Release, Hotfix, Develop
- The git merge command lets you take the independent lines of development created by git branch and integrate them into a single branch

**Resources**
- https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging

## Further Learning
Below are recommended resources that are procured by others that can help expand your knowledge on CSS


### [Git Crash Course](https://www.youtube.com/watch?v=8JJ101D3knE) - YouTube Video
**Author: Programming with Mosh**  
An hour long youtube video going over all the basics of git