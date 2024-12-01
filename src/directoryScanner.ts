import * as fs from 'fs/promises';
import * as path from 'path';

export class DirectoryScanner {
    private fileList: string[] = [];
    private enableLogging: boolean;

    constructor(enableLogging = true) {
        this.enableLogging = enableLogging;
    }

    public async scanDirectory(dirPath: string): Promise<string[]> {
        await this.scan(dirPath, '');
        return this.fileList;
    }

    private async scan(currentPath: string, indent: string): Promise<void> {
        const entries = await fs.readdir(currentPath, { withFileTypes: true });

        for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            const fullPath = path.join(currentPath, entry.name);
            if (entry.isDirectory()) {
                if (this.enableLogging) {
                    console.log(indent + entry.name + '/');
                }
                await this.scan(fullPath, indent + '  ');
            } else {
                this.fileList.push(fullPath);
                if (this.enableLogging) {
                    console.log(indent + entry.name);
                }
            }
        }
    }
}

if (require.main === module) {
    (async function() {
        const scanner = new DirectoryScanner();
        const directoryToScan = process.argv[2] || '.';
        const allFiles = await scanner.scanDirectory(directoryToScan);

        const txtFiles = filterFilesByExtension(allFiles, '.txt');
        console.log('Text files found:', txtFiles);
    })();
}

function filterFilesByExtension(
    allFiles: string[],
    extension: string,
): string[] {
    const result: string[] = [];
    for (let i = 0; i < allFiles.length; i++) {
        const file = allFiles[i];
        if (path.extname(file) === extension) {
            result.push(file);
        }
    }
    return result;
}
