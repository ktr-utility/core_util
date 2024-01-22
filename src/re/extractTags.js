const re = /\[['"]([a-zA-Z0-9\-\_\s]+)['"](?:[\s]?,[\s]?['"]([a-zA-Z0-9\-\_\s]+)['"])*\]/gm


function processString(inputStr) {
  // Remove the outer single quotes
  inputStr = inputStr.replace(/^'|'$/g, '');

  // Replace inner single quotes with double quotes
  const outputStr = inputStr.replace(/'/g, '"');

  return outputStr;
}

function stringToArray(inputStr) {
  let retVal

  try {
    retVal = JSON.parse(inputStr)
  } catch (err) {
    console.error(err)
  }

  return retVal
}



export default function extractTags(inputStr) {
    let matches = []


    inputStr.match(re).forEach(match => {
        const processedString = processString(match)
        const array = stringToArray(processedString)
        matches.push(array)
    })


    return matches
}