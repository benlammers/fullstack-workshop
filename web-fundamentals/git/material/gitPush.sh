#/bin/bash

path = $1
branch = $2
msg = $3

cd path
git add *
git commit -m msg
git push origin branch

echo "done"
