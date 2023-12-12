#!/bin/bash

# get password from -p
while getopts p: flag
do
    case "${flag}" in
        p) password=${OPTARG};;
        *) help;;
    esac
done

help()
{
    echo "Usage: $0 -p password"
    exit 1
}

echo "Deploying..."
pnpm i
pnpm run build

echo $password | sudo cp -r dist/* /usr/share/nginx/seshfe/
echo $password | sudo service nginx reload
rm -rf dist
echo "Deployed successfully"