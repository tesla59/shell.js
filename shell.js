import * as child from 'child_process';
import fs from 'fs';
import promptSync from 'prompt-sync';
import { userInfo } from "os";

export const prompt = promptSync({ sigint: false, eot: true, autocomplete: true });
export const HOMEDIR = userInfo().homedir
export const user = userInfo().username
export const exec = child.exec

import { ParseCommand } from "./commands.js"

global.PATH = ["/usr/local/bin", "/usr/bin", "/usr/local/sbin"]
global.currentDirectory = HOMEDIR
global.BuiltInCommands = ["cd", "pwd", "ls", "fg", "exit"]

for (; ;) {
    let prefix = currentDirectory
    if (prefix == HOMEDIR) prefix = "~"

    let input = prompt(prefix + " $ ")
    if (!input) {
        continue
    }
    let args = input.split(" ")
    let command = args.shift()

    // Built-in shell commands
    if (BuiltInCommands.includes(command)) {
        ParseCommand(command, args)
    }
}
