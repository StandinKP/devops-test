#!/bin/bash

zip -q -r dist.zip dist

scp -r dist.zip kaushal@192.168.1.16:~
ssh -o StrictHostKeyChecking=no kaushal@192.168.1.16 "unzip dist.zip && sudo -S cp -r dist/* /usr/share/nginx/seshfe/ && sudo -S service nginx reload && rm dist.zip && rm -rf dist && exit"
rm dist.zip