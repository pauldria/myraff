#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

SOURCE="${DIR}/docs/Posts/*"
DEST="${DIR}/docs/_posts"

echo "Copying files from ${SOURCE} to ${DEST}"

cp $SOURCE $DEST

echo "Relocating to root directory ${DIR}/docs"

cd $DIR/docs

echo "Launching jekyll"

bundle exec jekyll serve

