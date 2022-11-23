import * as shell from "./shell.js"
import { readDir } from "./utils.js";
import { exit } from 'node:process';
import path from "node:path";

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
    for (let i = 0; i < args.length; i++) {
        let dir
        console.log("=>", args[i], ":")
        if (args[i][0] != '/') {
            dir = path.join(currentDirectory, args[i])
        } else {
            dir = args[i]
        }
        try {
            readDir(dir).forEach((val) => { if (val[0] != '.') { console.log(val) } })
        } catch (err) {
            console.log("Error: directory not found:", args[i])
        }
    }
}

const cd = (args) => {
    if (!args.length) {
        currentDirectory = shell.HOMEDIR
        process.chdir(currentDirectory)
        return
    }
    let dir
    if (args[0][0] != '/') {
        dir = path.join(currentDirectory, args[0])
    } else {
        dir = args[0]
    }
    try {
        readDir(dir)
        currentDirectory = dir
        process.chdir(currentDirectory)
    } catch (err) {
        console.log("Error: directory not found:", args[0])
    }
}
