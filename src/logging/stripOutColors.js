
/**
 * Strips out chalk colors from a string.
 * @date 8/28/2023 - 7:22:04 PM
 *
 * @param {string} inputString
 * @returns {String}
 */
export default function stripOutColors(inputString) {
    // Define the regular expression pattern for detecting chalk colors
    const chalkColorRegex = /\x1b\[[0-9;]*m/g;

    // Use the regex pattern to replace all chalk color codes with an empty string
    const strippedString = inputString.replace(chalkColorRegex, '');

    return strippedString;
}