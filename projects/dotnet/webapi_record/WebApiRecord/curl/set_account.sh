#!/usr/bin/env bash

curl -k -X POST https://localhost:7065/api/v1/account -H "Content-Type: application/json" -d '{"username": "test", "id": "someid", "department":"adepartment"}'