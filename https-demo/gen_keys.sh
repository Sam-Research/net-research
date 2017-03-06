#!/bin/bash

# 生成 key
openssl genrsa 1024 > host.key
chmod 400 host.key
# 生成证书
openssl req -new -x509 -nodes -sha1 -days 365 -key host.key > host.cert