function renderLicenseBadge(license) {
    const mit = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    const gnu = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    const apache = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  
    if (license === 'MIT') {
      return mit;
    } else if (license === 'GPL 3.0') {
      return gnu;
    } else if (license === 'APACHE') {
      return apache;
    } else if (license === 'NONE') {
      return "";
    }
}

  module.exports = renderLicenseBadge;