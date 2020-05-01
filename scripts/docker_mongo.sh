#! /bin/bash

docker run --name gobarber_mongo \
    -p 27017:27017 \
    -d -t mongo

