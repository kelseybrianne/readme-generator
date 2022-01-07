const renderLicenseBadge = require('./renderLicenseBadge');
const renderLicenseSection = require('./renderLicenseSection');
const renderUsageSection = require('./renderUsageSection');
const renderInstallationSection = require('./renderInstallationSection');
const renderTestsSection = require('./renderTestsSection');

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