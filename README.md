# Project README

## Overview

This project includes two JavaScript files, `Manipulation.js` and `UserInfo.js`, which work together to process arrays, format strings, and create user profiles.

### Files

1. **Manipulation.js**: Contains functions for processing arrays and formatting strings.
2. **UserInfo.js**: Uses functions from `Manipulation.js` to create user profiles.

## File Descriptions

### Manipulation.js

This file has two functions:

1. **processArray**:

   - **Purpose**: Processes an array of numbers, squaring even numbers and trippling odd numbers.
   - **Example**:
     ```javascript
     function processArray(x) {
       return x.map((num) => (num % 2 === 0 ? num ** 2 : num * 3));
     }
     console.log(processArray([1, 2, 3, 4, 5]));
     ```

2. **formatArrayStrings**:
   - **Purpose**: Formats an array of strings based on a corresponding array of numbers. Converts to uppercase if the number is even, and to lowercase if odd.
   - **Example**:
     ```javascript
     function formatArrayStrings(unprocessed_string, processArray) {
       return unprocessed_string.map((str, index) =>
         processArray[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase()
       );
     }
     console.log(
       formatArrayStrings(
         ["kofi", "ama", "rodri", "kingsly", "rudiger"],
         [1, 2, 3, 4, 5]
       )
     );
     ```

### UserInfo.js

This file imports `formatArrayStrings` from `Manipulation.js` and creates user profiles.

1. **createUserProfiles**:

   - **Purpose**: Generates user profiles with original and modified names.
   - **Example**:

     ```javascript
     import formatArrayStrings from "./Manipulation.js";

     function createUserProfiles(originalNames, processArray) {
       const modifiedNames = formatArrayStrings(originalNames, processArray);
       return originalNames.map((name, index) => ({
         id: index + 1,
         originalName: name,
         modifiedName: modifiedNames[index],
       }));
     }

     const originalNames = ["kofi", "ama", "rodri", "kingsly", "rudiger"];
     const processArray = [1, 2, 3, 4, 5];
     console.log(createUserProfiles(originalNames, processArray));

     export { createUserProfiles };
     ```

## How to Run

1. **Ensure Node.js is installed**.
2. **Place both `Manipulation.js` and `UserInfo.js` in the same directory**.
3. **Run the script**:
   ```bash
   node UserInfo.js
   ```

This will print the user profiles to the console.

## Conclusion

This project demonstrates basic array manipulation and string formatting in JavaScript, along with creating user profiles using the processed data.
