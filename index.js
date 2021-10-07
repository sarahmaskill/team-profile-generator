const inquirer = require('inquirer');
const fs = require('fs');

const employeeData = (input) => ``
const engineerData = (input) => ``
const internData = (input) => ``
const managerData = (input) => ``


    (async () => {
        //manager questions
        const managerPrompt = inquirer.prompt([
            {
                type: 'input',
                name: 'mName',
                message: "What is the Team Manager's name",
            },
            {
                type: 'input',
                name: 'mID',
                message: "What is the Team Manager's Employee ID",
            },
            {
                type: 'input',
                name: 'mEmail',
                message: "What is the Team Manager's email address",
            },
            {
                type: 'input',
                name: 'mOfficeNum',
                message: "What is the Team Manager's office number",
            },
        ]);
        //write manager data
        managerPrompt.then((input) => {
            const readMe = managerData(input)
            const filename = `team.html`;
            fs.writeFile(filename, readMe, (err) =>
                err ? console.log(err) : console.log('Success!')
            );
        });
        //add new team member?
        const confirm = inquirer.prompt([
            {
                type: "confirm",
                name: "newTeamMember",
                message: "Do you need to add another team member?"
            },
        ]);
        //check team member add
        confirm.then(() => {
            if (confirm.input === true)
            //add new member if confirmed
                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'type',
                        message: "What type of team member are you adding?",
                        choices: ["Engineer", "Intern", "Abort"],
                    }
                ])
                    .then((type) => {
                        if (type.choices === "Engineer")
                            inquirer.prompt([
                                {
                                    type: 'input',
                                    name: 'mName',
                                    message: "What is the Team Manager's name",
                                },
                                {
                                    type: 'input',
                                    name: 'mID',
                                    message: "What is the Team Manager's Employee ID",
                                },
                                {
                                    type: 'input',
                                    name: 'mEmail',
                                    message: "What is the Team Manager's email address",
                                },
                                {
                                    type: 'input',
                                    name: 'mOfficeNum',
                                    message: "What is the Team Manager's office number",
                                },
                            ]).then

                    })
            else
                return
        }
        return { ...managerPrompt, ...confirm };
    })()
    .then(console.log)
    .catch(console.error);