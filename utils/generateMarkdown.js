// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
    ${data.description}

  ## Table of Contents
      * Description
      * Installation
      * Usage
      * Contributing
      * Tests
      * Contact
  
  ## Installation
  ### To install necessary dependencies, run the bellow command:
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  ### It is recommended that this program is used as follows: 
  ${data.usage}

  ## License
  ${data.License}

  ## Contribution
  ### Contribution guidelines are as follows:
  ${data.contributing}

  ## Tests
  ${data.Tests}

  ## Contact
  ### Laura's GitHub:
  ${data.gitHub}
  ### Laura's email:
  ${data.email}`
  
};

module.exports = generateMarkdown;

//consider spaces/lines/markdown formatting