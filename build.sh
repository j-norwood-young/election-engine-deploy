#!/bin/sh

git clone git@github.com:j-norwood-young/dm-elections-dashboard.git src
cp src/readme.txt .
cp src/election-engine.php .
cd src
yarn
cd packages/election-engine-wordpress-block
npm run build
cd ../../..
mkdir -p packages/election-engine-wordpress-block
cp -r src/packages/election-engine-wordpress-block/build packages/election-engine-wordpress-block
cp -r src/packages/election-engine-wordpress-block/php packages/election-engine-wordpress-block
cp -r src/packages/election-engine-wordpress-block/svelte packages/election-engine-wordpress-block
rm -rf src