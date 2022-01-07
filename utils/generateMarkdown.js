function renderLicenseBadge(license) {
  const mit = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  
  const gnu = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'

  if (license === 'MIT') {
    return mit;
  } else if (license === 'GNU AGPLv3') {
    return gnu;
  } else {
    return "";
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This application is covered under the ${license} license.`;
  } else {
    return "";
  }
}

// Create a function that returns the usage section of README
function renderUsageSection(usage) {
  if (usage !== 'none') {
    return `Run the following commands to use the application:
  \`\`\`
  ${usage}
  \`\`\`
  `
  } else {
    return "";
  }
}

function renderInstallationSection(installation) {
  if (installation !== 'none') {
    return `To install any dependencies, run the following command:
  \`\`\`
  ${installation}
  \`\`\`
  `
  } else {
    return "";
  }
}

function renderTestsSection(tests) {
  if (tests !== 'none') {
    return `To install any dependencies, run the following command:
  \`\`\`
  ${tests}
  \`\`\`
  `
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const { title, description, license, installation, usage, contributing, tests, email, username } = answers

  return ` 
  # ${title}

  ${renderLicenseBadge(license)}
  
  ## Description

  ${description}

  ## Table of Contents
  
  - [ Installation ](#installation)
  - [ Usage ](#usage)
  - [ License ](#license)
  - [ Contributing ](#contributing)
  - [ Tests ](#test)
  - [ Questions ](#questions)

  ## Installation
  
  ${renderInstallationSection(installation)}

  ## Usage

  ${renderUsageSection(usage)}
  
  ## License
  
  ${renderLicenseSection(license)}
  
  ## Contributing
  
  ${contributing}

  ## Tests

  ${renderTestsSection(tests)}

  ## Questions

  Reach out if you have any questions:

  Email: ${email}   
  GitHub: [${username}](https://github.com/${username})
  `;
}

module.exports = generateMarkdown;