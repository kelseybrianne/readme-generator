// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');
const writeToFile = require('./utils/writeToFile');

// Function to initialize app
function init() {
  inquirer  
    .prompt(questions)
    .then(answers => {
      console.log(answers);
      const myMarkdown = generateMarkdown(answers);

      // call 'writeToFile' function with desired file name and 'myMarkdown'
      writeToFile('./output/README.md', myMarkdown); 
    })
    .catch((error) => {console.log(error)});
}

// Function call to initialize app
init();