# Overview

I have created a Recursive Directory Scanner in an attempt to go deeper into TypeScript and the features it provides. It is a command-line tool able to scan a directory, recursively traverse the subdirectories, and print the file structure hierarchically. This project will demonstrate some key concepts with TypeScript: classes, recursion, asynchronous functions, exception handling, and the use of lists (arrays). In this project, Jest is included for testing, and ESLint is used for linting the code.

This software was written in an attempt to determine exactly how TypeScript can be used in the building of scalable, maintainable applications. Additional effort was made to utilize testing and linting tools to simulate that professional development process, further creating and cementing how TypeScript syntax and best practices are to be used.

[Software Demo Video](http://youtube.link.goes.here)

# Development Environment

- **Operating System:** Windows 10
- **Editor:** Visual Studio Code
- **Runtime Environment:** Node.js v14.0.0
- **Programming Language:** TypeScript v4.0.0
- **Testing Framework:** Jest v26.0.0
- **Linting Tool:** ESLint v7.0.0
- **Package Manager:** npm v6.14.0

The project was developed using TypeScript, which provided strong typing and modern JavaScript features. I used Node.js for executing the script and handling asynchronous file system operations. Jest was used for writing unit tests to verify the functionality of the directory scanner. ESLint, configured with TypeScript support, was used to maintain code quality and consistency throughout the project.

# Useful Websites

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [Node.js File System Module](https://nodejs.org/api/fs.html)
- [Jest Testing Framework](https://jestjs.io/docs/en/getting-started)
- [ESLint for TypeScript](https://eslint.org/docs/user-guide/getting-started)
- [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint)

# Future Work

- **Improve Error Handling:** Enhance the exception handling to cover more edge cases and provide more informative error messages.
- **Add File Filtering Options:** Implement functionality to filter the scanned files based on extensions or patterns.
- **Generate Output Files:** Extend the tool to output the directory structure to a file in formats like JSON or XML.
- **Performance Optimization:** Optimize the scanning process for large directories by implementing concurrency or stream processing.
- **User Interface:** Develop a graphical user interface (GUI) to make the tool more user-friendly for non-technical users.
