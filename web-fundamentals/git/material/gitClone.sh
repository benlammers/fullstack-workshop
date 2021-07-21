#/bin/bash

link = $1
path = $2 

cd path 
git clone link
git pull

echo "done"