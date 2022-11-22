import * as shell from "./shell.js"

export const ParseCommand = (command, args) => {
    switch (command) {
        case "pwd":
            pwd()
            break
        case "cd":
            cd(args)
            break
    }
}

const pwd = () => {
    console.log(currentDirectory)
    return currentDirectory
}

const cd = (args) => {
    if (!args.length) { currentDirectory = shell.HOMEDIR }
}