// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'Provide a title.',
        type: 'input'
    },
    {
        name: 'license',
        message: 'What kind of license would you like to include?',
        type: 'list',
        choices: ['MIT', 'GNU AGPLv3'] 
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Use the fs module to write 'data' to 'fileName'
    fs.writeFile(
        fileName,
        data,
        (err) => 
        err ? console.error(err) : console.log('Commit logged!')
    )
}

// TODO: Create a function to initialize app
function init() {
  inquirer  
    .prompt(questions)
    .then(answers => {
      console.log(answers);
      const myMarkdown = generateMarkdown(answers);

      // call the 'writeToFile' function with your desired file name and 'myMarkdown'
      writeToFile('README.md', myMarkdown); 
    })
    .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });
}

// Function call to initialize app
init();