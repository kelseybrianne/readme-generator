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

  module.exports = renderLicenseBadge;