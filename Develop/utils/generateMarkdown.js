// TODO: Create a function to generate markdown for README
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// code is completed and ready to be pushed to main branch and ready to be submmited
class ReadmeGen {
  renderLicenseBadge(license) {
    const badges = {
      mit: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)',
      isc: '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)(https://opensource.org/licenses/ISC)',
      gnuplv3: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)(https://www.gnu.org/licenses/gpl-3.0)',

    }
    return badges[license];

  }
  // license section 
  renderLicenseSection(license) {
    if (license) {
      return `License under the ${this.renderLicenseSection(license)} license`
    }
    else {
      return ``
    }

  }

  // Line 45 returns actual MIT license
  display(data) {


    return `# ${data.name}
${this.renderLicenseBadge(data.license)}
  
## Table of Content
-[Project description](#Description)
-[Installations](#Installations)
-[License](#License)
-[Contributions](#Contributions)
-[Tests](#Tests)
-[Usage](#Usage)
-[Questons](#Questions)
  

## Description
${data.description}

## Installation
${data.install}

## License
${data.license}

## Contributions
${data.contribute}

## Tests
${data.test}

## Usage
${data.usage}


## Questions
${data.username}
${data.address}

` ;


  }

}
// exports the code inside the file
module.exports = new ReadmeGen();

// A generator that is produced on the backend developer using node.js. This generator creates a professional README file which users can 
// use to their discretion 