// TODO: Include packages needed for this application
const inquirer = require('inquirer');
inquirer
  .prompt([
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
      message: 'Provide a README.md title.',
      type: 'input'
    },
    {
        name: 'description',
        message: 'Describe your application.',
        type: 'input'
    },
    {
        name: 'installation',
        message: 'Provide instructions for installation.',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'Provide intructions on how to use the application.',
        type: 'input'
    },
    {
        name: 'contributing',
        message: 'What are the contribution guidelines?',
        type: 'input'
    },
    {
        name: 'tests',
        message: 'What tests would you like to include?',
        type: 'input'
    },
    {
        name: 'license',
        message: 'What kind of license would you like to include?',
        type: 'list',
        choices: ['MIT', 'GNU AGPLv3'] 
    }
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

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
        message: 'What would you like to title your README.md file?',
        type: 'input'
    },
    {
        name: 'description',
        message: 'Describe your application.',
        type: 'input'
    },
    {
        name: 'installation',
        message: 'What are the installation instructions for your application?',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'What is the usage information?',
        type: 'input'
    },
    {
        name: 'contributing',
        message: 'What are the contribution guidelines?',
        type: 'input'
    },
    {
        name: 'tests',
        message: 'What are the test instructions?',
        type: 'input'
    },
    {
        name: 'license',
        message: 'What kind of license would you like to include?',
        type: 'list',
        choices: ['MIT', 'heiilo'] 
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();