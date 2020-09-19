// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributors](#contributors)
  *[Tests](#tests)
  *[Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license} 

  ${data.link}

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
