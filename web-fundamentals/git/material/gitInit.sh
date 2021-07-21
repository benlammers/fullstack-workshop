#!/usr/bin/env bash
path = $1

cd path
git init .
touch .gitignore
git add --all
git commit -m"initial commit"
git push origin --all
git push origin --tags

echo "Done."   