import * as shell from "./shell.js"

export const ParseCommand = (command) => {
    switch(command) {
        case "pwd":
            pwd()
            break
    }
}

export const pwd = () => {
    console.log(shell.currentDirectory)
    return shell.currentDirectory
}
