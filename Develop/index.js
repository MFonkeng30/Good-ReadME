const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
function questionsPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your application?"
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a brief description of your application:"
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide any instructions or requirements for installation:"
        },
        {
            type: "input",
            name: "usage",
            message: "What is the primary usage of your application:"
        },
        {
            type: "input",
            name: "license",
            message: "Which license would you like to apply to your application:",
            choices: [
                "Apache 2.0 License",
                "MIT License",
                "GNU GPL v3 License"
            ]
        },
        {
            type: "input",
            name: "contributors",
            message: "Please include any contributors:"
        },
        {
            type: "input",
            name: "tests",
            message: "Please list any tests that you would like to include for your application:"

        },
        {
            type: "input",
            name: "github",
            message: "What is your github?"

        },
        {
            type: "input",
            name: "email",
            message: "What email would you prefer to be contacted at for questions"

        }
    ])
}

// function to write README file
//function writeToFile(fileName, data) {}

// function to initialize program
async function init() {
    try {
        const answers = await questionsPrompt();
        
        if (answers.licenses === "Apache 2.0 License") {
      
            answers.link = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        }
        if (answers.licenses === "The MIT License") {

            answers.link = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        }
        if (answers.licenses === "GNU GPL v3 License") {
      
            answers.link = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        }
        const README = generateMarkdown(answers);
        await writeFileAsync("README.md", README);
        console.log("Success! You have created your README.md!");
    } catch(err) {
        console.log(err);
    }
}

// function call to initialize program
init();
