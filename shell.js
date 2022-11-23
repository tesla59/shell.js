import promptSync from 'prompt-sync';
import { userInfo } from "os";
import { ParseCommand } from "./commands.js"
import { exec } from "./utils.js"

const prompt = promptSync({ sigint: false, eot: true, autocomplete: false });
const BuiltInCommands = ["cd", "pwd", "ls", "fg", "exit"]
const PATH = ["/usr/local/bin", "/usr/bin", "/usr/local/sbin"]

export const HOMEDIR = userInfo().homedir

process.chdir(HOMEDIR)

for (; ;) {
    let prefix = process.cwd().replace(HOMEDIR, "~")

    let input = prompt(prefix + " $ ")
    if (!input) {
        continue
    }
    let args = input.split(" ")
    let command = args.shift()

    // Built-in shell commands
    if (BuiltInCommands.includes(command)) {
        ParseCommand(command, args)
        continue
    }
    exec(command, args)
}
