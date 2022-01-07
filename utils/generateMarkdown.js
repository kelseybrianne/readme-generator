
// Do I put this in index.js?

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

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
  if (usageCommands !== 'none') {
    return `Run the following commands to use the application:
  \`\`\`
  ${usageCommands}
  \`\`\`
  `
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const { title, license, usage } = answers

  return ` 
  # ${title}
  
  ${renderLicenseBadge(license)}

  ${renderUsageSection(usage)}

  ## License

  ${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;