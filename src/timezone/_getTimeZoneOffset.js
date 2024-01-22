/**
 * https://stackoverflow.com/questions/29265389/how-do-i-calculate-the-difference-of-2-time-zones-in-javascript
 * @param {Date} date 
 * @param {string} timeZone 
 * @returns {number} offset
 */
export default function _getTimeZoneOffset(date, timeZone) {
  // Abuse the Intl API to get a local ISO 8601 string for a given time zone.
  let iso = date.toLocaleString('en-CA', { timeZone, hour12: false })

  // if the hour is 24 change it to 00
  iso = iso.replace(' 24:', ' 00:')

  let year, month, day, time


  // check format of iso string
  // Case 1: ie YYYY-MM-DD, HH:MM:SS
  if (/^\d{4}-\d{2}-\d{2}, \d{2}:\d{2}:\d{2}$/g.test(iso)) {
    year = iso.split('-')[0]
    month = iso.split('-')[1]
    if (month.length === 1) month = '0' + month
    day = iso.split('-')[2].split(', ')[0]
    if (day.length === 1) day = '0' + day
    time = iso.split(', ').pop()
  }
  else {
    year = iso.split('/').pop().split(', ')[0]
    month = iso.split('/')[0]
    if (month.length === 1) month = '0' + month
    day = iso.split('/')[1]
    if (day.length === 1) day = '0' + day
    time = iso.split(', ').pop()
  }

  
  iso = `${year}-${month}-${day}T${time}`


    
  // Include the milliseconds from the original timestamp
  // iso += '.' + date.getMilliseconds().toString().padStart(3, '0')


  // iso += 'Z'
  
  // Lie to the Date object constructor that it's a UTC time.
  const lie = new Date(iso)

  // Return the difference in timestamps, as minutes
  // Positive values are West of GMT, opposite of ISO 8601
  // this matches the output of `Date.getTimeZoneOffset`
  let ret = -(lie - date) / 60 / 1000
  ret = Math.round(ret)
  return ret
}