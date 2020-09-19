// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${data.link}
  
  ## Description
  ${data.description}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license} 

  ![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, please reach out to me at ${data.github},
  or via email at ${data.email}
`;
}

module.exports = generateMarkdown;
