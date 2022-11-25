import * as fs from 'fs';
import { spawnSync } from 'child_process';

export const readDir = (path) => {
    return fs.readdirSync(path, { withFileTypes: true })
        // .filter((item) => item.isDirectory())
        .map((item) => item.name)
}

export const exec = (command, args) => {
    var binary = spawnSync(command, args, { encoding: 'utf8', shell: true });
    console.log(binary.stdout);
}
