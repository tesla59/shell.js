import * as child from 'child_process';
import fs from 'fs';
import promptSync from 'prompt-sync';
import { userInfo } from "os";

const prompt = promptSync({ sigint: true });
const homedir = userInfo().homedir
const user = userInfo().username
const exec = child.exec

let PATH = ["/usr/local/bin", "/usr/bin", "/usr/local/sbin"]
let currentDirectory = homedir
let BuiltInCommands = ["cd", "ls", "exit", ""]

for (; ;) {
    let prefix = currentDirectory
    if (prefix == homedir) prefix = "~"

    let input = prompt(prefix + " $ ")
    let args = input.split(" ")
    let command = args.shift()
}
