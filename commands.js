import * as shell from "./shell.js"

export const ParseCommand = (command, ...arguements) => {
    switch(command) {
        case "pwd":
            pwd()
            break
    }
}

const pwd = () => {
    console.log(shell.currentDirectory)
    return shell.currentDirectory
}
