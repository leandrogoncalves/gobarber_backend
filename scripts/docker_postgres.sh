#! /bin/bash

docker run --name gobarber_postgres \
    -e POSTGRES_PASSWORD=db123 \
    -p 5432:5432 \
    -d postgres:11

