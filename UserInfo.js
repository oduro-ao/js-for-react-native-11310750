// userInfo.js
import formatArrayStrings from "./Manipulation.js";

function createUserProfiles(originalNames, processArray) {
    const modifiedNames = formatArrayStrings(originalNames, processArray);

    const userProfiles = originalNames.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });

    return userProfiles;
}

const originalNames = ["kofi", "ama", "rodri", "kingsly", "rudiger"];
const processArray = [1, 2, 3, 4, 5];  
const userProfiles = createUserProfiles(originalNames, processArray);

console.log(userProfiles);

export { createUserProfiles };
