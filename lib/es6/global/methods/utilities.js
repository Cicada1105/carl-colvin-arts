/*
    Global utility methods shared by the entire project
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getCurrentFile = () => {
    // Get current path location
    let pathName = window.location.pathname;
    // Split location path to extract file name
    let pathArray = pathName.split("/");
    // Last element will contain file name with extension
    let currPg = pathArray[pathArray.length - 1];
    // Remove extension '.html' = length of currPg(up to but not including) - 5(length of .html)
    let fileName = currPg.slice(0, (currPg.length - 5));
    return fileName;
};
const loadBootstrap = () => {
    // Create link tag for Bootstrap Font Awesome icons
    let bootstrapLink = document.createElement('script');
    // Add href attribute
    bootstrapLink.setAttribute('src', 'https://kit.fontawesome.com/296e9763f7.js');
    // Append Bootstrap cdn to head for font asesome icons
    document.head.appendChild(bootstrapLink);
};
const isValidEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    let emailReport = {
        validEmail: true
    };
    // Check if email contains multiple "@" symbols
    let ampMatch = (_a = email.match(/@/g)) !== null && _a !== void 0 ? _a : [];
    if (ampMatch.length !== 1) {
        if (ampMatch.length > 1) {
            let reaptingCharError = {
                type: "Repeating Character",
                message: "@ symbol displayed more than once. Valid email contains only one @ symbol"
            };
            emailReport.validEmail = false;
            emailReport.report = reaptingCharError;
            return emailReport;
        }
        else {
            let missingCharError = {
                type: "Missing Character",
                message: "Missing '@' symbol. Valid email requires '@' symbol"
            };
            emailReport.validEmail = false;
            emailReport.report = missingCharError;
            return emailReport;
        }
    }
    // Split email at the '@' symbol, separating Recipient/Local name from rest
    let emailSplit = email.split("@");
    let recipientLocalName = emailSplit[0];
    let domain = emailSplit[1];
    /***********************/
    /*      Recipient      */
    /***********************/
    // Check if Recipient starts w/ valid char -> invalid
    let startingRecipientMatch = (_b = recipientLocalName.match(/(?<!\W)((?<!\w)[!#$%&'*+-/=?^_`{|}~])/g)) !== null && _b !== void 0 ? _b : [];
    if (startingRecipientMatch.length === 1) {
        let invalidStartChar = {
            type: "Invalid Character Location",
            subtype: "Invalid Recipient Starting Character",
            message: `Cannot begin email local name with ${startingRecipientMatch[0]}`
        };
        emailReport.validEmail = false;
        emailReport.report = invalidStartChar;
        return emailReport;
    }
    // Check if Recipient ends with valid char -> invalid
    let endingMatch = (_c = recipientLocalName.match(/([!#$%&'*+-/=?^_`{|}~](?!\w))(?!\W)/g)) !== null && _c !== void 0 ? _c : [];
    if (endingMatch.length === 1) {
        let invalidEndChar = {
            type: "Invalid Character Location",
            subtype: "Invalid Recipient Trailing Character",
            message: `Cannot end email local name with ${endingMatch[0]}`
        };
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
    let multiplValidChars = (_d = recipientLocalName.match(/(?<validChar>[!#$%&'*+-/=?^_`{|}~])(?=\k<validChar>)/)) !== null && _d !== void 0 ? _d : [];
    if (multiplValidChars.length > 1) {
        let invalidRepeatingChar = {
            type: "Invalid Repeating Character",
            message: `${multiplValidChars[0]} cannot be used more than once within local name`
        };
        emailReport.validEmail = false;
        emailReport.report = invalidRepeatingChar;
        return emailReport;
    }
    /*********************/
    /*      Domain       */
    /*********************/
    // Check if domain contains . or - at beginning or end -> invalid
    let startingDomainMatch = (_e = domain.match(/(?<!\W)((?<!\w)[.-])/g)) !== null && _e !== void 0 ? _e : [];
    if (startingDomainMatch.length === 1) {
        let invalidStartChar = {
            type: "Invalid Character Location",
            subtype: "Invalid Domain Starting Character",
            message: `Cannot begin domain with ${startingDomainMatch[0]}`
        };
        emailReport.validEmail = false;
        emailReport.report = invalidStartChar;
        return emailReport;
    }
    let endingDomainMatch = (_f = domain.match(/([.-](?!\w))(?!\W)/g)) !== null && _f !== void 0 ? _f : [];
    if (endingDomainMatch.length === 1) {
        let invalidEndChar = {
            type: "Invalid Character Location",
            subtype: "Invalid Domain Trailing Character",
            message: `Cannot end domain with ${endingDomainMatch[0]}`
        };
        emailReport.validEmail = false;
        emailReport.report = invalidEndChar;
        return emailReport;
    }
    // Split at . to extract domain name, TLD name and possibly SLD name
    let domains = domain.split(".");
    let domainName = domains[0];
    let TLDName = domains[1];
    let SLDName = (_g = domains[2]) !== null && _g !== void 0 ? _g : "";
    // Check for valid domain name
    let domainNameMatch = (_h = domainName.match(/[^A-Za-z0-9-]/)) !== null && _h !== void 0 ? _h : [];
    if (domainNameMatch.length === 1) {
        let invalidChar = {
            type: "Invalid Character",
            message: `Domain name cannot contain ${domainNameMatch[0]}`
        };
        emailReport.validEmail = false;
        emailReport.report = invalidChar;
        return emailReport;
    }
    // Check TLD against valid list
    var validDomainsStr = "";
    yield requestValidDomains().then((results) => {
        validDomainsStr = results;
        let validDomains = validDomainsStr.split("\n");
        // Attempt to locate user's entered TLDName
        var foundIndex = validDomains.findIndex((domain) => {
            return (domain.localeCompare(TLDName.toUpperCase()) === 0);
        });
        if (foundIndex === -1) {
            let tldError = {
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
            foundIndex = validDomains.findIndex((domain) => {
                return (domain.localeCompare(SLDName.toUpperCase()) === 0);
            });
            if (foundIndex === -1) {
                let sldError = {
                    type: "Invalid Domain Name",
                    subtype: "Secondary Level Domain Name is invalid",
                    message: `SLD Name ${SLDName} cannot be found`
                };
                emailReport.validEmail = false;
                emailReport.report = sldError;
            }
        }
    });
    return emailReport;
});
function requestValidDomains() {
    return __awaiter(this, void 0, void 0, function* () {
        let results = "";
        yield request().then((values) => {
            results = values;
        }).catch((error) => {
            console.log("Error:\n" + error);
        });
        return results;
    });
}
;
let request = () => {
    return new Promise((resolve, reject) => {
        let xml = new XMLHttpRequest();
        xml.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(this.responseText);
                }
                else {
                    reject(this.responseText);
                }
            }
        };
        xml.open("GET", "https://data.iana.org/TLD/tlds-alpha-by-domain.txt");
        xml.send();
    });
};
export { loadBootstrap, getCurrentFile, isValidEmail };
