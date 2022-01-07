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

  module.exports = renderTestsSection;