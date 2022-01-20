import {prg} from "./system/prg"

let program = new prg("https://hsreplay.net/collection/2/968383630/");

program.load(process.argv.slice(2));