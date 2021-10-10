//link employees 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//Link html template
const HTMLtemplate = require('./src/HTMLtemplate');

//require npm packages
const inquirer = require('inquirer');
const fs = require('fs');

//Full Team Array
const fullTeam = [];

//manager questions
const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager?'
        },
        {
            type: 'input',
            name: 'id',
            message: "what is that manager's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "what is the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of the manager?'
        }
    ])
        .then(managerPrompt => {
            const { name, id, email, officeNumber } = managerPrompt;
            const manager = new Manager(name, id, email, officeNumber);
            fullTeam.push(manager)
            console.log(manager)
        })
};
const newEmployee = () => {
    console.log('Add employees to the Team!');

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employees email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'confirmnewEmployee',
            message: 'Would you like to add more employees?',
            default: false
        }
    ])
        .then(employeeData => {
            let { name, id, email, role, github, school, confirmnewEmployee } = employeeData;
            let employee;
            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);
            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);
            }
            fullTeam.push(employee);

            if (confirmnewEmployee) {
                return newEmployee(fullTeam);
            } else {
                return fullTeam;
            }
        })
}
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your Team Profile has been generated in the dist folder")
        }
    })
};

managerPrompt()
    .then(newEmployee)
    .then(fullTeam => {
        return HTMLtemplate(fullTeam);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });