#!/usr/bin/env bash

echo "> Go to www folder"
cd www

echo "> Recreate data folder"
rm -rf data
mkdir data

echo "> Getting Champions Data"
babel-node tools/champions.js

echo "> Getting Realms Data"
babel-node tools/realms.js

echo "> Build client webpack"
webpack
