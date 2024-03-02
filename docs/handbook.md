### 1. JavaScript vs. TypeScript vs. Node.js: What's the Difference?

**JavaScript (JS):** The basic language of the web. It makes web pages interactive (buttons, animations, etc.).

**TypeScript (TS):** Like JavaScript, but with superpowers! It adds "types" (like numbers, text) to your code, catching errors early and making it easier to write big projects.

**Node.js:**  Lets you use JavaScript outside of the web browser. Think of it as the engine that allows you to build websites (the back-end part),  programs, and other cool stuff that don't live in a browser. 

### 2. "Hello, World!" in TypeScript
TypeScript enhances JavaScript by adding types and some other features. The "Hello, World!" program in TypeScript is written to introduce the basic syntax, which is similar to JavaScript, but with additional type-checking.

**Basic Structure of a TypeScript Program**
1. **File Extension**: `.ts` - TypeScript files have a `.ts` extension.On the other hand JavaScript files have a `.js` extension.
2. `console.log("Hello, World!");` - Outputs the text "Hello, World!" to the console.

**Example Code**
```typescript
console.log("Hello, World!";); // Display the message in the console
```

### 3. Linux Shell Command Basics
A fundamental understanding of Linux shell commands is crucial for navigating directories, managing files, and executing typescript programs in a Linux environment.

**Navigating Directories**
1. `pwd` - Prints the current working directory.
2. `cd` - Changes the current directory.
3. `mkdir -p` - Creates directories and their parent directories as needed.
4. `ls -l` - Lists the contents of the current directory with details.

**Working With Files**
1. `touch` - Creates a new file.
2. `cat` - Displays the content of a file.
3. `cp` - Copies files or directories.
4. `mv` - Moves or renames files or directories.
5. `rm` - Removes files or directories.

**Project Build**
1. `make` - Builds and manages the project from source code.

**JuniorIT's Special Shell Commands**

1. `jcode` - Opens a file with the Code Editor.
2. `jcscript` - Runs C,C++ source code directly.
3. `juniorit` - Manages JuniorIT assignments.

**Code Example**
```sh
pwd                  # Print the current directory
ls -l                # List files and directories with details
mkdir -p path/to/dir # Create directory and its children directories
cd path/to/dir       # Change to specified directory
touch file.txt       # Create a new file named 'file.txt'
# Prints the string 'hello world' and redirects the output to 'file.txt'
echo "hello world" > file.txt      
rm file.txt          # Delete 'file.txt'

juniorit get         # Checks out your starter project for the assignment
jcode test.ts        # Opens the file test.ts in the Code Editor from the terminal
ts-node hello.ts     # Directly executes 'hello.ts' using ts-node

make                 # Builds your starter project
make clean           # Removes any cached build files
make run             # Tests your starter project
make deploy          # Deploys your game to your personal website for public access
make submit          # Submits your code for review; It is the same as the command `juniorit submit`
```

### 4. Compile and Execute TypeScript Program
TypeScript is not executed directly by JavaScript engines; it undergoes a process called transpilation. The TypeScript code must be transpiled into JavaScript using the TypeScript compiler (tsc) before it can be run.

**Transpilation**
1. `tsc` - The TypeScript compiler, used to transpile TypeScript files to JavaScript.
2. `tsc script.ts` - Transpiles `script.ts` into a JavaScript file `script.js`.
3. `tsc --outFile output.js script.ts` - Transpiles `script.ts` into a specified JavaScript output file `output.js`.

**Execution**
1. `node output.js` - Executes the transpiled JavaScript file `output.js` if Node.js is installed.

**Direct Execution with ts-node**
1. `ts-node` - It is a TypeScript execution environment for Node.js. It allows you to run TypeScript files (.ts) directly without the need for an intermediate compilation step. This is achieved by registering the TypeScript compiler (tsc) on-the-fly and compiling and executing the TypeScript code in-memory.

**Code Example**
```bash
tsc script.ts                    # Transpile the TypeScript file to JavaScript.
node script.js                   # Execute the JavaScript file with Node.js.

tsc --outFile app.js script.ts   # Transpile with a specified output filename.
node app.js                      # Execute the specified JavaScript file.

ts-node hello.ts                 # Directly executes 'hello.ts' using ts-node
```

### 5. Output and Logs in TypeScript
TypeScript uses console methods to output information, useful for debugging or providing runtime information. as it is in JavaScript.   

**Console Output**
1. `console.log()` - Outputs general messages to the console.
2. `console.error()` - Outputs error messages to the console.
3. `console.warn()` - Outputs warning messages to the console.
4. `console.info()` - Outputs informational messages to the console.

**Code Example**
```typescript
console.log("General message for standard output.");
console.error("Error message for standard error output.");
console.warn("Warning message.");
console.info("Informational message.");
```

### 6. Comments in TypeScript
Comments in TypeScript are used to explain the code and are identical to JavaScript comments. They help make the code more readable and can also disable code during the development phase.

1. **Single-line Comments**: `//` - Used for short comments on a single line.
2. **Multi-line Comments**: `/* */` - Suitable for longer comments that span multiple lines.
3. **JuniorIT's Special Comments**: `/*+ +*/` - These comments are for instructions to students, and the AI will ignore these comments.


**Code Example**


```typescript
/*+ 
JuniorIT's Special Comments
The AI will ignore these contents
+*/


// This is a single-line comment in TypeScript

console.log("Hello, World!");
/*
    This is a multi-line comment in TypeScript.
    It can contain multiple lines of text.
    Useful for more detailed explanations.
*/
```