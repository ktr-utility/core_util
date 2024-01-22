import { addMinutes } from 'date-fns'

import _getTimeZoneOffset from './_getTimeZoneOffset.js'


/**
 * @param {(Date|string)} dt 
 * @return {string} iso8601 string
 */
export default function nyToUTC(dt) {
  const localOffset = _getTimeZoneOffset(new Date(), 'America/New_York')

  if (typeof(dt) === 'string') {
    if (dt.includes('Z')) {
      throw new Error("Warning: nycToUTC() received a UTC dt string that contains 'Z'.")
    }

    const localDT = addMinutes(new Date(dt), localOffset)

    //const nydt = localDT.toLocaleString("en-US", {timeZone: "America/New_York"})

    const iso_str = localDT.toISOString()

    return iso_str
  }

  if (dt instanceof Date) {
    let newdt = addMinutes(dt, localOffset)

    return newdt.toISOString()
  }
}