// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license.toLowerCase() === 'none') {
    return '';
  }
  const licenseBadges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache-2.0': '[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GPL-3.0': '[![License: GPL-3.0](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD-3Clause': '[![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',

  };
  return licenseBadges[license] || '';
  
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license.toLowerCase() === 'none') {
    return '';
  }
  const licenseLinks = {
    'MIT': '[MIT License](https://opensource.org/licenses/MIT)',
    'Apache-2.0': '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
    'GPL-3.0': '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD-3-Clause': '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)',
};

return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license.toLowerCase() === 'none') {
    return '';
  }
  const licenseInfo = {
    'MIT': 'This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).',
    'Apache-2.0': 'This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).',
    'GPL-3.0': 'This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0).',
    'BSD-3-Clause': 'This project is licensed under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).',
};
return licenseInfo[license] || '';
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  console.log('hi')
  const { title, description, installation, usage, license, contributing, tests, username, email } = data;
  const readmeContent = `
# ${title}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

${renderLicenseBadge(license)}

${renderLicenseSection(license)}

For additional details, please check the full license at ${renderLicenseLink(license)}.

## Contributing

${contributing}

## Tests

${tests}

## Questions

GitHub: [${username}](https://github.com/${username})

For additional questions, contact me at ${email}.
`;

  
  return readmeContent;
}

module.exports = generateMarkdown;
