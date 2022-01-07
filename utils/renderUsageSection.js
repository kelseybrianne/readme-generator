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

  module.exports = renderUsageSection;