@echo off
call npx tsc main.ts --outDir output
node ./output/main.js