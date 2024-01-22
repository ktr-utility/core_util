/** Helper function for extractObjectsFromString()
 *  The purpose is to make sure double quotes are used instead of single quotes.
 *  @param {string} str
 *  @returns {String} cleaned string
 */
export default function (str) {
  const cleanedString = str
    .replace(/([{,]\s*)(['"])?([a-zA-Z_][a-zA-Z0-9_]*)\2\s*:/g, '$1"$3":')
    .replace(/'/g, '"'); // Replace single quotes with double quotes

  return cleanedString
}