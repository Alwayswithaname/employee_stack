const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const inquirer = require("inquirer");
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
                            const pass = answer.match(/\S+@\S+\.\S+/)
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
            .then((answers) => {
                const manager = new Manager(
                    answers.managerName,
                    answers.managerId,
                    answers.managerEmail,
                    answers.managerOfficeNumber
                );
                teamMembers.push(manager);
                idArray.push(answers.managerId);
                createTeam()
            })
    }
    function createTeam() {
        inquirer
        .prompt([
            {
                type: 'list',
                name: "memberChoice",
                message: "Which type of employee are you adding? ",
                choices: [
                    'Engineer',
                    'Intern',
                    "I dont want to add any more team members",
                ],
            },
        ])
        .then((useerChoice) => {
            switch (useerChoice.memberChoice) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                        buildTeam();
            }
        });
    }
    function addEngineer() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'engineerName',
                    message: "What is the engineer's name?",
                    validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        }
                            return "Please enter at least on character.";
                    },
                },{
                    type: 'input',
                    name: 'engineerId',
                    message: 'what is the engingeers ID number? ',
                    validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/)
                        if (pass) {
                            return true
                        }
                            return 'please enter a positive number greater than zero.'
                    },
                },{
                    
                        type: 'input',
                        name: 'engineerEmail',
                        message: "what is the engineer's email?",
                        validate: (answer) => {
                            const pass = answer.match(/\S+@\S+\.\S+/)
                            if (pass) {
                                return true
                            }
                                return 'please enter a vazlid email address.';
                    },
                },{
                    type: 'input',
                    name: 'engineerGithub',
                    message: "What is this engineer's github username? ",
                    validate: (answer) => {
                        if (answer !== '') {
                            return true
                        }
                            return 'please enter a positive number greater than zero.'
                    },
                },
        ])
        .then((answers) => {
            const engineer = new Engineer(
                answers.engineerName,
                answers.engineerId,
                answers.engineerEmail,
                answers.engineerGithub
            );
            teamMembers.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
        });
    }
    function addIntern() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'internName',
                    message: "What is the interns's name?",
                    validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        }
                            return "Please enter at least on character.";
                    },
                },{
                    type: 'input',
                    name: 'internId',
                    message: "what is the intern's ID number? ",
                    validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/)
                        if (pass) {
                            return true
                        }
                            return 'please enter a positive number greater than zero.'
                    },
                },{
                    
                        type: 'input',
                        name: 'internEmail',
                        message: "what is the intern's email?",
                        validate: (answer) => {
                            const pass = answer.match(/\S+@\S+\.\S+/)
                            if (pass) {
                                return true
                            }
                                return 'please enter a vazlid email address.';
                    },
                },{
                    type: 'input',
                    name: 'internSchool',
                    message: "What is this interns School? ",
                    validate: (answer) => {
                        if (answer !== '') {
                            return true
                        }
                            return 'please enter a positive number greater than zero.'
                    },
                },
        ])
        .then((answers) => {
            const intern = new Intern(
                answers.internName,
                answers.internId,
                answers.internEmail,
                answers.internSchool
            );
            teamMembers.push(intern);
            idArray.push(answers.internID);
            createTeam();
        });
    }

    function buildTeam() {

        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
        }
        fs.writeFileSync(distpath, render(teamMembers), 'utf-8');
    }

    creatManager();
}

appMenu();