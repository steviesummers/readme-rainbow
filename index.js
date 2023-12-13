// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input


const requiredModule = require('./index.js');
const fs = require('fs');
const inquirer = require('inquirer');
const generateREADME = require('./generateMarkdown.js');

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
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?',
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md generated successfully!')
     )
}

// TODO: Create a function to initialize app
function init() {
    console.log('init');

    inquirer
  .prompt(questions)
  .then((answer) => {
    const readmeContent = generateREADME(answer);
    fs.writeFile('generatedREADME.md', readmeContent, (err) =>
    err ? console.error(err) : console.log('good job'))
  });

}

// Function call to initialize app
init();



    // inquirer.createPromptModule(questions)().then((answers) => {
    //     const readmeContent = generateREADME(answers);
    //     writeToFile('README.md', readmeContent, data);

    // });