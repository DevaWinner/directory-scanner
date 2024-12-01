import * as fs from 'fs/promises';
import * as path from 'path';
import { DirectoryScanner } from '../src/directoryScanner';

describe('DirectoryScanner Tests', function() {
    const testDir = './testDir';

    beforeAll(async function() {
        // Set up test directory structure
        await fs.mkdir(testDir, { recursive: true });
        await fs.writeFile(path.join(testDir, 'file1.txt'), 'Content of file1');
        await fs.writeFile(path.join(testDir, 'file2.md'), 'Content of file2');
        await fs.mkdir(path.join(testDir, 'subdir'));
        await fs.writeFile(
            path.join(testDir, 'subdir', 'file3.txt'),
            'Content of file3',
        );
    });

    afterAll(async function() {
        // Clean up test directory
        await fs.rm(testDir, { recursive: true, force: true });
    });

    test('scanDirectory should list all files', async function() {
        const scanner = new DirectoryScanner(false);
        const files = await scanner.scanDirectory(testDir);
        files.sort();

        const expectedFiles: string[] = [];
        expectedFiles.push(path.join(testDir, 'file1.txt'));
        expectedFiles.push(path.join(testDir, 'file2.md'));
        expectedFiles.push(path.join(testDir, 'subdir', 'file3.txt'));
        expectedFiles.sort();

        expect(files).toEqual(expectedFiles);
    });

    test('filterFilesByExtension should filter .txt files', function() {
        const files: string[] = [];
        files.push(path.join(testDir, 'file1.txt'));
        files.push(path.join(testDir, 'file2.md'));
        files.push(path.join(testDir, 'subdir', 'file3.txt'));

        const txtFiles = filterFilesByExtension(files, '.txt');
        txtFiles.sort();

        const expectedTxtFiles: string[] = [];
        expectedTxtFiles.push(path.join(testDir, 'file1.txt'));
        expectedTxtFiles.push(path.join(testDir, 'subdir', 'file3.txt'));
        expectedTxtFiles.sort();

        expect(txtFiles).toEqual(expectedTxtFiles);
    });
});

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
