import * as child from 'child_process';
import fs from 'fs';
import promptSync from 'prompt-sync';
import { userInfo } from "os";

const prompt = promptSync({ sigint: false, eot: true, autocomplete: true });
const homedir = userInfo().homedir
const user = userInfo().username
const exec = child.exec

import { ParseCommand } from "./commands.js"

export let PATH = ["/usr/local/bin", "/usr/bin", "/usr/local/sbin"]
export let currentDirectory = homedir
export let BuiltInCommands = ["cd", "pwd", "ls", "fg", "exit"]

for (; ;) {
    let prefix = currentDirectory
    if (prefix == homedir) prefix = "~"

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
