// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:',
      },
      {
        type: 'input',
        name: 'license',
        message: 'What kind of license should your project have?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'What does the user need to know about contributing to the repo?',
      },
];

const promptUser = () => {
    return inquirer.prompt(questions);
  };

// TODO: Create a function to write README file
// function writeToFile({title, description, github, license}) {
//     generateMarkdown({title, description, github, license});
// }

// TODO: Create a function to initialize app
function init() {
    promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('./utils/README.md', generateMarkdown(answers)))
    .then(() => console.log('Generating README.md...'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
