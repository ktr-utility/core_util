/**
 *  @returns {string}
 */
export default function getCurrentTime() {
    let today = new Date()
    return today.toISOString().split('T')[1].split('.')[0]
}