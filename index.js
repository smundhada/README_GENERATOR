// Getting the needed node functions 
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);
// array of questions for user
function promptUser() {
    return inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "Title"
    },
    {
        type: "input",
        message: "Give some description of what your project is about",
        name: "Description"
    },
    {
        type: "input",
        message: "What steps are needed to install the project?",
        name: "Install"
    },
    {
        type: "input",
        message: "Give instructions for usability.",
        name: "Usage"
    },
    {
        type: "input",
        message: "Who were the contributors in the project?",
        name: "Contributors"
    },
    {
        type: "input",
        message: "What is the best method to test your project?",
        name: "Test"
    },
    {
        type: "list",
        message: "Select license suited to your project",
        name: "License",
        choices: [
            "MIT",
            "Mozilla",
            "APACHE",
            "GPL",
            "ECLIPSE",
            "BSD",
            "PUBLIC DOMAIN",
            "None"
        ]
    },
    {
        type: "input",
        message: "What is your Github username",
        name: "Username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "Email"
    }
    
    ]);
}


// function to write README file
function generateReadMe(data) {
    return `
    # ${data.Title}

    ## Table of Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributors](#contributors)
    * [Test](#test)
    * [License](#license)
    * [Questions](#questions)
    


    ## Description
    ${data.Description}

    ## Installation 
    ${data.Installation}

    ## Usage 
    ${data.Usage}

    ## Contributors
    ${data.Contributors}

    ## Test
    ${data.Test}

    ## License
    ${data.License}

    ## Questions
    Contact me:
    Github:[${data.Username}](https://github.com/DiLiubarets)
    Email:[${data.Email}](https://github.com/DiLiubarets)`;
}

// function to initialize program
async function init() {
    console.log("hi")
    try {
      const answers = await promptUser();
      const readMe = generateReadMe(answers);
  
      await writeFile("README.md", readMe);
  
      console.log("Successfully wrote to README.md");
    } catch(err) {
      console.log(err);
    }
}

// function call to initialize program
init();
