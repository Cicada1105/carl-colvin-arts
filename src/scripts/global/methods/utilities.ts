/*
	Global utility methods shared by the entire project
*/

// Imports
//  interfaces
import {
  EmailReport,
  MissingCharacter,
  RepeatingCharacter,
  InvalidCharacterLocation,
  InvalidCharacter,
  InvalidDomain,
  InvalidStartingCharacter,
  InvalidTrailingCharacter,
  TLDError,
  SLDError
} from '../interfaces/errors'

const getCurrentFile = ():string => {
  // Get current path location
	let pathName:string = window.location.pathname;

  // Split location path to extract file name
	let pathArray:string[] = pathName.split("/");

  // Last element will contain file name with extension
  let currPg:string = pathArray[pathArray.length - 1];

  // Remove extension '.html' = length of currPg(up to but not including) - 5(length of .html)
  let fileName = currPg.slice(0,(currPg.length - 5));

  return fileName;
}
const loadBootstrap = ():void => {
  // Create link tag for Bootstrap Font Awesome icons
  let bootstrapLink:any = document.createElement('script');
  // Add href attribute
  bootstrapLink.setAttribute('src','https://kit.fontawesome.com/296e9763f7.js');

  // Append Bootstrap cdn to head for font asesome icons
  document.head.appendChild(bootstrapLink);
}

const isValidEmail = async (email:string):Promise<EmailReport> => {
  let emailReport:EmailReport = {
    validEmail: true
  }

  // Check if email contains multiple "@" symbols
  let ampMatch:string[] = <string[]>email.match(/@/g) ?? [];

  if (ampMatch.length !== 1) {
    if (ampMatch.length > 1) {
      let reaptingCharError:RepeatingCharacter = {
        type: "Repeating Character",
        message: "@ symbol displayed more than once. Valid email contains only one @ symbol"
      }
      emailReport.validEmail = false;
      emailReport.report = reaptingCharError;

      return emailReport;
    }
    else {
      let missingCharError:MissingCharacter = {
        type: "Missing Character",
        message: "Missing '@' symbol. Valid email requires '@' symbol"
      }
      emailReport.validEmail = false;
      emailReport.report = missingCharError;

      return emailReport;
    }
  }

  // Split email at the '@' symbol, separating Recipient/Local name from rest
  let emailSplit:string[] = email.split("@");

  let recipientLocalName:string = emailSplit[0];
  let domain:string = emailSplit[1];

  /***********************/
  /*      Recipient      */
  /***********************/
  // Check if Recipient contains invalid character
  let invalidCharMatch:string[] = <string[]>recipientLocalName.match(/["(),:;<>[\]]/) ?? [];

  if (invalidCharMatch.length === 1) {
    let invalidChar:InvalidCharacter = {
      type: "Invalid Character",
      message: `Local name cannot contain ${invalidCharMatch[0]}`
    }
    emailReport.validEmail = false;
    emailReport.report = invalidChar;

    return emailReport;
  }

  // Check if Recipient starts w/ valid char -> invalid
  let startingRecipientMatch:string[] = <string[]>recipientLocalName.match(/(?<!\W)((?<!\w)[!#$%&'*+-/=?^_`{|}~])/g) ?? [];

  if (startingRecipientMatch.length === 1) {
    let invalidStartChar:InvalidStartingCharacter = {
      type:"Invalid Character Location",
      subtype: "Invalid Recipient Starting Character",
      message: `Cannot begin email local name with ${startingRecipientMatch[0]}`
    }
    emailReport.validEmail = false;
    emailReport.report = invalidStartChar;

    return emailReport;
  }

  // Check if Recipient ends with valid char -> invalid
  let endingMatch:string[] = <string[]>recipientLocalName.match(/([!#$%&'*+-/=?^_`{|}~](?!\w))(?!\W)/g) ?? [];

  if (endingMatch.length === 1) {
    let invalidEndChar:InvalidTrailingCharacter = {
      type:"Invalid Character Location",
      subtype: "Invalid Recipient Trailing Character",
      message: `Cannot end email local name with ${endingMatch[0]}`
    }
    emailReport.validEmail = false;
    emailReport.report = invalidEndChar;

    return emailReport;
  }

  // Check if recipient contains same valid char appars consecutively >= 2 times -> invalid
  /*
    Use Named Capturing Group:
    (?<Name>x)
      x: the regexp match
      Name: name given to the match 'x' that can be used to reference later

    Back Reference
      -Used to reference a named capturing group within a regexp
    \k<Name>
      Name: name give to the capturing group above
  */
  let multiplValidChars:string[] = <string[]>recipientLocalName.match(/(?<validChar>[!#$%&'*+-/=?^_`{|}~])(?=\k<validChar>)/) ?? [];

  if (multiplValidChars.length > 1) {
    let invalidRepeatingChar:RepeatingCharacter = {
      type: "Invalid Repeating Character",
      message: `${multiplValidChars[0]} cannot be used more than once within local name`
    }
    emailReport.validEmail = false;
    emailReport.report = invalidRepeatingChar;

    return emailReport;
  }

  /*********************/
  /*      Domain       */
  /*********************/
  // Check if domain contains . or - at beginning or end -> invalid
  let startingDomainMatch:string[] = <string[]>domain.match(/(?<!\W)((?<!\w)[.-])/g) ?? [];

  if (startingDomainMatch.length === 1) {
    let invalidStartChar:InvalidStartingCharacter = {
      type:"Invalid Character Location",
      subtype: "Invalid Domain Starting Character",
      message: `Cannot begin domain with ${startingDomainMatch[0]}`
    }
    emailReport.validEmail = false;
    emailReport.report = invalidStartChar;

    return emailReport;
  }

  let endingDomainMatch:string[] = <string[]>domain.match(/([.-](?!\w))(?!\W)/g) ?? [];

  if (endingDomainMatch.length === 1) {
    let invalidEndChar:InvalidTrailingCharacter = {
      type: "Invalid Character Location",
      subtype: "Invalid Domain Trailing Character",
      message: `Cannot end domain with ${endingDomainMatch[0]}`
    }
    emailReport.validEmail = false;
    emailReport.report = invalidEndChar;

    return emailReport;
  }

  // Split at . to extract domain name, TLD name and possibly SLD name
  let domains:string[] = domain.split(".");
  let domainName:string = domains[0];
  let TLDName:string = domains[1];
  let SLDName:string = domains[2] ?? "";

  // Check for valid domain name
  let domainNameMatch:string[] = <string[]>domainName.match(/[^A-Za-z0-9-]/) ?? [];

  if (domainNameMatch.length === 1) {
    let invalidChar:InvalidCharacter = {
      type: "Invalid Character",
      message: `Domain name cannot contain ${domainNameMatch[0]}`
    }
    emailReport.validEmail = false;
    emailReport.report = invalidChar;

    return emailReport;
  }

  // Check TLD against valid list
  var validDomainsStr:string = "";
  await requestValidDomains().then((results:string) => {
    validDomainsStr = results;
    let validDomains:string[] = <string[]>validDomainsStr.split("\n");

    // Attempt to locate user's entered TLDName
    var foundIndex:number = validDomains.findIndex((domain:string) => {
      return (domain.localeCompare(TLDName.toUpperCase()) === 0);
    })
    if (foundIndex === -1) {
      let tldError:TLDError = {
        type: "Invalid Domain Name",
        subtype: "Top Level Domain Name is invalid",
        message: `TLD Name ${TLDName} cannot be found`
      };
      emailReport.validEmail = false;
      emailReport.report = tldError;
    }
    // Check SLDName only if it exists and TLDName did not return an error, attempt to locate
    if (SLDName && emailReport.validEmail) {
      // Reusing found index var 
      foundIndex = validDomains.findIndex((domain:string) => {
        return (domain.localeCompare(SLDName.toUpperCase()) === 0);
      });
      if (foundIndex === -1) {
        let sldError:SLDError = {
          type: "Invalid Domain Name",
          subtype: "Secondary Level Domain Name is invalid",
          message: `SLD Name ${SLDName} cannot be found`   
        }
        emailReport.validEmail = false;
        emailReport.report = sldError;
      }
    }
  });

  return emailReport;
}
async function requestValidDomains():Promise<string> {
  let results:string = "";

  await request().then((values:string) => {
    results = values;
  }).catch((error:string) => {
    console.log("Error:\n" + error);
  });

  return results;
};
let request:()=>Promise<string> = ():Promise<string> => {
  return new Promise((resolve, reject) => {
    let xml = new XMLHttpRequest();

    xml.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(this.responseText);
        }
        else {
          reject(this.responseText);
        }
      }
    }

    xml.open("GET","https://data.iana.org/TLD/tlds-alpha-by-domain.txt");
    xml.send();
  });
}

export { loadBootstrap, getCurrentFile, isValidEmail }