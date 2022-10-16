const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs')

const DIST_DIR = path.resolve(__dirname, 'dist');
const distpath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

const teamMembers = [];
const idArray = [];

console.log(
    '\nWelcome to the team generator!\nUse `npm run reset` the dist/ folder\n'
);

function appMenu() {
    function creatManager() {
        console.log('Please build your team ');
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'managerName',
                    message: "What is the team manager's name?",
                    validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        }
                            return "Please enter at least on character.";
                    },
                },{
                    type: 'input',
                    name: 'managerId',
                    message: '',
                    validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/)
                        if (pass) {
                            return true
                        }
                            return 'please enter a positive number greater than zero.'
                    },
                },{
                    
                        type: 'input',
                        name: 'managerEmail',
                        message: "what is the team manger's email?",
                        validate: (answer) => {
                            const pass = answer.math(/\S+@\S+\.\S+/)
                            if (pass) {
                                return true
                            }
                                return 'please enter a vazlid email address.';
                    },
                },{
                    type: 'input',
                    name: 'managerOfficeNumber',
                    message: '',
                    validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/)
                        if (pass) {
                            return true
                        }
                            return 'please enter a positive number greater than zero.'
                    },
                },
            ])
            .then((answer) => {
                const manager = new Manager(
                    answer.managerName,
                    answer.managerId,
                    answer.managerEmail,
                    answer.managerOfficeNumber
                );
                teamMembers.push(manager);
                idArray.push(answer.managerId);
                creatTeam()
            })
    }
}