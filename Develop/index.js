const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMD = require("./utils/generateMarkdown.js")

const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
function questions() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your application?"
        },
        {
            type: ""
        }
    ])
}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
