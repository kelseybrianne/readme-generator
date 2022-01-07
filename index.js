// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');
const writeToFile = require('./utils/writeToFile');

// TODO: Create a function to initialize app
function init() {
  inquirer  
    .prompt(questions)
    .then(answers => {
      console.log(answers);
      const myMarkdown = generateMarkdown(answers);

      // call the 'writeToFile' function with your desired file name and 'myMarkdown'
      writeToFile('./output/README.md', myMarkdown); 
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