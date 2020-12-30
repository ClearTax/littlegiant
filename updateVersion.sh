#!/usr/bin/env bash
VERSION=$(cat package.json| grep version| head -1| awk -F: '{ print $2 }'| sed 's/[` `,",]//g')
unamestr=`uname`
if [[ "$unamestr" == "Darwin" ]]; then
  sed -i "" "s/version [0-9]*.[0-9]*.[0-9]*/version $VERSION/g" src/littlegiant.css
else
  sed -i "s/version [0-9]*.[0-9]*.[0-9]*/version $VERSION/g" src/littlegiant.css
fi
