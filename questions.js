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
