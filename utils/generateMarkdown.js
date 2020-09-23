// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.Title}
---

## Table of Contents
---
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributors](#Contributors)
* [Test](#Test)
* [License](#License)
* [Questions](#Questions)



## Description
---
${data.Description}

## Installation 
---
${data.Install}

## Usage 
---
${data.Usage}

## Contributors
---
${data.Contributors}

## Test
---
${data.Test}

## License
---
${data.License}

## Questions
---
Github Link - https://github.com/${data.Username}
Email - ${data.Email}`;
}

module.exports.generateMarkdown = generateMarkdown;
