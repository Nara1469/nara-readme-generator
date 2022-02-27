// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  let licenseDescription = "";
  switch (license.toLowerCase()) {
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
      break;
  }
  return { licenseBadge, licenseDescription }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, license, description, github, email, installation, usage, contribute }) {
  const { licenseBadge, licenseDescription } = renderLicenseBadge(license);
  console.log(licenseBadge);
  console.log(licenseDescription);

  return `# ${title} 

${licenseBadge}
  
## Description
${description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License

🏆 This application is licensed under the ${license} license.

---

## Features

If your project has a lot of features, list them here.

## How to Contribute
${contribute}

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Questions

If you have any questions about the repo, open an issue or ccontact me directly at ${email}. You can find more of my work at [${github}](https://github.com/${github}/).`
}

module.exports = generateMarkdown;
