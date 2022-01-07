// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    name: 'username',
    message: 'What is your GitHub username?',
    type: 'input'
  },
  {
      name: 'email',
      message: 'What is your email?',
      type: 'input'
  },
  {
      name: 'title',
      message: 'Provide a title for your README.',
      type: 'input'
  },
  {
      name: 'description',
      message: 'Provide a description for your application.',
      type: 'input'
  },
  {
      name: 'installation',
      message: 'What command needs to be run for installation?. If none, write none.',
      type: 'input'
  },
  {
      name: 'usage',
      message: 'What command need to be run in order to use the application? If none, write none.',
      type: 'input'
  },
  {
      name: 'contributing',
      message: 'What are the contribution guidelines?',
      type: 'input'
  },
  {
      name: 'tests',
      message: 'What command needs to be run for tests?',
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