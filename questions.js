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
];
