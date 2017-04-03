#!/bin/bash

VER="0.1.1"

cp wechatu.desktop ./Release/wechatu-linux-x64/wechatu.desktop
cp setup.py ./Release/wechatu-linux-x64/setup.py

cd Release

rm ./wechatu-linux-x64/resources/app/node_modules -rf

tar zcvf wechatu-v$VER-linux-x64.tar.gz wechatu-linux-x64/

mv wechatu-v$VER-linux-x64.tar.gz ../
