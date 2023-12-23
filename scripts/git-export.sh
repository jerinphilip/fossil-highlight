#!/bin/bash

set -eo pipefail
set -x

REMOTE="git@github.com:jerinphilip/fossil-highlight.git"
FOSSIL=$(realpath fossil-highlight.fossil)
REPO=$(mktemp -d fossil-highlight-XXX -p /tmp)
mkdir -p $REPO
git -C $REPO init
git -C $REPO checkout -b trunk
git -C $REPO remote add origin $REMOTE
fossil export --git $FOSSIL | git -C $REPO fast-import
git -C $REPO log
git -C $REPO branch -m main
git -C $REPO push origin main --force
rm -rf $REPO
