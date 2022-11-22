import * as shell from "./shell.js"
import { readDir } from "./utils.js";
import { exit } from 'node:process';

export const ParseCommand = (command, args) => {
    switch (command) {
        case "pwd":
            pwd()
            break
        case "cd":
            cd(args)
            break
        case "ls":
            ls(args)
            break
        case "exit":
            (() => { console.log("exit"); exit(0) })()
    }
}

const pwd = () => {
    console.log(currentDirectory)
    return currentDirectory
}

const ls = (args) => {
    if (!args.length) { readDir(currentDirectory).forEach((val) => { if (val[0] != '.') { console.log(val) } }); return }
}

const cd = (args) => {
    if (!args.length) { currentDirectory = shell.HOMEDIR; return }
}
