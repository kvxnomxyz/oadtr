#!/bin/sh
# usage: sh issues/create-all.sh owner/oadtr
for f in "$(dirname "$0")"/*.md; do
  t=$(head -1 "$f" | sed "s/^TITLE: //")
  gh issue create -R "$1" --title "$t" --body "$(tail -n +3 "$f")" --label DTU
done
