#! /bin/bash

docker run --name gobarber_redis \
    -p 6379:6379 \
    -d -t redis:alpine

