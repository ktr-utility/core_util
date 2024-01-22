
/**
 * Strips out substrings that match the supplied regex from a string.
 * Useful for reducing clutter in log messages.
 * @date 8/28/2023 - 7:24:55 PM
 *
 * @export
 * @param {string} inputString
 * @param {RegExp} regex
 * @returns {String}
 */
export default function stripSubstrings(inputString, regex) {
    const strippedString = inputString.replace(regex, '')
 
    return strippedString
}