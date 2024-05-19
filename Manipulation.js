/* * * Task 1 * * */
function processArray(x) {
  var processed_array = [];

  for (let i = 0; i < x.length; i++) {
    if (x[i] % 2 === 0) {
      processed_array.push(x[i] ** 2);
    } else {
      processed_array.push(x[i] * 3);
    }
  }

  return processed_array;
}

var processArray = processArray([1, 2, 3, 4, 5]);
console.log(processArray);

/* * * Task 2 * * */
function formatArrayStrings(unprocessed_string, processArray) {
  var processed_string = [];

  for (let i = 0; i < unprocessed_string.length; i++){
    if (processArray[i] % 2 === 0){
      processed_string.push(unprocessed_string[i].toUpperCase());
    } else {
      processed_string.push(unprocessed_string[i].toLowerCase());
    }
    }

  return processed_string;
}

var unprocessed_string = ["kofi", "ama", "rodri", "kingsly", "rudiger"];

console.log(formatArrayStrings(unprocessed_string, processArray));

export default formatArrayStrings 
