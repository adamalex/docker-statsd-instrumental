#!/bin/bash

docker run -it \
  -e "STATSD_DEBUG=true" \
  -e "INSTRUMENTAL_API_KEY=$INSTRUMENTAL_API_KEY" \
  -p 8125:8125/udp \
  -p 8126:8126 \
  statsd
