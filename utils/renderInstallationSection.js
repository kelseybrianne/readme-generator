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

  module.exports = renderInstallationSection;