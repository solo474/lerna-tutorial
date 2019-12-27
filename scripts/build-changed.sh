#!/bin/bash
CURRENT_WORKING_DIRECTORY=$PWD
echo "Building changed packages"
echo "Current Working Directory Is "$PWD
node "$CURRENT_WORKING_DIRECTORY/scripts/build-changed.js"
