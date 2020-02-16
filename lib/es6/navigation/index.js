// Imports
import { links } from './data';
import { getCurrentFile } from './methods';
const createNavigation = () => {
    // Store current path
    let currPath = getCurrentFile();
    // Current link of type ILink
    let link;
    let directories;
    for (link of links) {
        // Check if current file matches a link (equivalent => 0)
        console.log(link);
        if (currPath.localeCompare(link.name.toLowerCase()) == 0) {
            console.log("Current link: " + link.name);
            console.log("ID = active");
            // No need to continue comparing other links
            break;
        }
        // Store current subdirectories to loop through
        directories = link.subdirectories;
        // Current link could either have null subdirectories or an array of ILink objects
        if ((directories != null) && (directories.length > 0)) {
            for (let dir of directories) {
                console.log(dir.name);
                if (currPath.localeCompare(dir.name.toLowerCase()) == 2) {
                    console.log("Found path match of " + dir.name);
                    console.log("ID = 'active'");
                    // No need to continue comparing other links
                    break;
                }
            }
        }
    }
};
export { createNavigation };
