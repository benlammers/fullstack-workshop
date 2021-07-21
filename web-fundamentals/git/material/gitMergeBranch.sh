#/bin/bash

path = $1
branch1 = $2
branch2 = $3

cd path
git checkout -b branch2
git add test.txt
git commit -m "Start a feature"
git add test1.txt
git commit -m "Finish a feature"
git checkout branch1
git merge branch2
git branch -d branch2
