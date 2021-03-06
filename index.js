// TODO: Include packages needed for this application
//"import inquirer"
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path");//require a path package for the md file name
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will this project be used?',
    },
    {
        type: 'checkbox',
        name: 'License',
        message: 'What licensing does this project have?',
        choices: [
            'None', 'Eclipse', 'MIT', 'Mozilla'
        ],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can GH users contribute to this project?',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Provide tests',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'provide GitHub profile link where questions can be sent',
    },
    {
        type: 'input',
        name: 'email',
        message: 'provide an email address where questions can be sent',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
     let markdown = data;
     return fs.writeFileSync(path.join(process.cwd(), fileName), data) //file in current working directory

}

// TODO: Create a function to initialize app
//"main" function, initializes application
function init() {
    inquirer.prompt(questions).then((responses) => { 
        console.log(responses);
        //key=name, value=answer
        // call generate markdown?
        writeToFile("README.md", generateMarkdown(responses))
        console.log(responses) 
    // include responses.name to access answer responses?
    })
}

// Function call to initialize app
init();
