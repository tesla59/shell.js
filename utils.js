import * as fs from 'fs';

export const readDir = (path) => {
    return fs.readdirSync(path, { withFileTypes: true })
        .filter((item) => item.isDirectory())
        .map((item) => item.name)
}