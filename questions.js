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
        message: 'What commands need to be run for installation?. If none, write none.',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'What commands need to be run in order to use the application? If none, write none.',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'Provide any additional usage instructions.',
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
