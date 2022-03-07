// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseChoice) {
  let licenseBadge = "";
  let licenseDescription = "";
  switch (licenseChoice.toLowerCase()) {
    case "apache":
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      licenseDescription = "Apache License Version 2.0";
      break;
    case "mit":
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      licenseDescription = "The MIT License";
      break;
    case "isc":
      licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      licenseDescription = "ISC License (ISC)";
      break;
    case "gplv2":
      licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      licenseDescription = "GNU GPL v2";
      break;
    case "gplv3":
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      licenseDescription = "GNU GPL v3";
      break;
    case "unlicense":
      licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      licenseDescription = "The Unlicense";
      break;
    case "boost":
      licenseBadge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      licenseDescription = "Boost Software License 1.0";
      break;
    default:
      licenseBadge = "";
      licenseDescription = "[N/A]";
      break;
  }
  return { licenseBadge, licenseDescription }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, license, description, github, email, installation, user, contribute }) {

  const { licenseBadge, licenseDescription } = renderLicenseBadge(license[0]);
  
  let installationText = `This repo has no dependencies. There is no specific guidance to use this application`;

  if (installation) {
installationText = `Clone the repository then run the following command at the root directory as by default to install all necessary dependencies.

\`\`\`
npm i
\`\`\`
    
Once you have the modules installed in the root directory run the following command to run the application.
    
\`\`\`
node index
\`\`\``;
  }

  let contributeText = `This repo is under construction. Please wait for the contribution!`;

  if (contribute) {
contributeText = `If you want to contribute the repo, follow the next steps:

- Create your own git branch
- Push it to the repository
- Create a Pull Request
    
If the PR is approved by the administrator, the code will be merged into the main branch!`;
  }
  
  return `# ${title} 

${licenseBadge}
  
## Description

${description}

## Table of Contents 

* [User Story](#user-story)
* [License](#license)
* [Installation Guide](#installation-guide)
* [How to Contribute](#how-to-contribute)
* [Questions](#questions)

## User Story

\`\`\`
${user}
\`\`\`

## License

🏆 This application is licensed under ${licenseDescription}.

---

## Installation Guide

${installationText}

## How to Contribute

${contributeText}
 
## Questions

If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [GitHub](https://github.com/${github}/).`
}

module.exports = generateMarkdown;
