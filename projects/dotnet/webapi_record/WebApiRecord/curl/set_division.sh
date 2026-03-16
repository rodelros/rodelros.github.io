#!/usr/bin/env bash

curl -k -X POST https://localhost:7065/api/v1/division -H "Content-Type: application/json" -d '{"name": "my division"}'