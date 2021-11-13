#!/bin/bash
# 使用 sh push-otp.sh [otp-name]

echo "正在向【$1】OTP环境上部署代码"

# 本地打包
echo 'build start'

yarn build

# fis 部署
cp ./fis-conf.js ./output/fis-conf.js

# 在build目录下支持fis release，只是方便match文件
cd output

echo 'fis release start'
PROXY="$1" fis3 release -d ./
