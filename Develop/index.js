// TODO: Include packages needed for this application
// Moved Develop folder out of potential-engima folder
const inquirer = require('inquirer');
const fs = require('fs');
const ReadmeGen = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// 
const questions = [
    /* Pass questions in here */
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Description of the Project',
        name: 'description',
    },

    {
        type: 'input',
        message: 'Any commands that should be run to install dependencies?',
        name: 'install',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        choices: ['MIT','GNUPLv3','ISC',],
        default: "MIT",
        // basePath: './src',
        name: 'license',

        // filter function prints out userinput choice
        filter(val) {

        return val.toLowerCase();

    }
    },
{
    type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
            name: 'contribute',
    },
{
    type: 'input',
        message: 'What command should be run to run tests?',
            name: 'test',
    },
{
    type: 'input',
        message: 'what does the user need to know about using the repo?',
            name: 'usage',
    },
{
    type: 'input',
        message: 'What is your Github username?',
            name: 'username',
    },
{
    type: 'input',
        message: 'What is your email address?',
            name: 'address',
    },


  
];



// function to run the questions on terminal
function readQuestion() {
    return inquirer.prompt(questions)

        .then((data) => {
            const mark = ReadmeGen.display(data)
            fs.writeFile('README.md', mark, function (err) {
                if (err) {
                    console.log(mark);
                    console.log("filed could not be saved");
                }
                else {
                    console.log('Sucess!');
                    console.log('Generating README file...');
                }

            })

        })
        .catch((error) => {
            console.log(error);
        });
}

readQuestion();

