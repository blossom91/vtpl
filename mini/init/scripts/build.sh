#!/bin/sh
set -e
# cmc_standard
export PATH=$NODEJS_12_16_1_BIN:$PATH
MOD_NAME='<%= projectName %>'

echo "env check"
echo "MOD_NAME: ${MOD_NAME}"
echo "node -v: `node -v`"
echo "npm -v: `npm -v`"
echo "build start"

rm -rf output
# 使用 内部源 安装依赖包
npm config set cache "~/.npm"
NODE_ENV=development npm i --registry=http://registry.npm.baidu-int.com
BUILD=tower npm run build

if [ $? -ne 0 ]; then
    exit 1
fi

function packStaticModule()
{
    cd ./output
    # server端需要的结构
    mkdir -p webroot
    # cdn资源需要的结构
    cp -r ../spec ./
    cp -r static webroot
    rm -rf static
    rm -rf template
}
packStaticModule;

if [ $? -eq 0 ]; then
    echo '[build] done'
    exit 0
else
    echo '[build] fail'
    exit 1
fi