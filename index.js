// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

const fs = require('fs');
const inquirer = require('inquirer');
const generateREADME = require('./generateREADME');


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
