/**
 * Description placeholder
 * @date 8/23/2023 - 12:55:50 PM
 *
 * @export
 * @param {*} jsonString
 * @returns {*}
 *
 * @example: '{\n  "for":  "controlScript",\n  "type":  "completed",\n  "data":  { "host":  "localhost", "port":  "4000" }'
 *            => '{"for":"controlScript","type":"completed","data":{"host":"localhost","port":"4000"}}'
 */
export default function(jsonString) {
  // Remove newline characters and extra spaces
  const cleanedString = jsonString.replace(/\n/g, '').replace(/\s{2,}/g, ' ')

  return cleanedString
}