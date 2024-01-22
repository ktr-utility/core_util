import { addMinutes } from 'date-fns'

import _getTimeZoneOffset from './_getTimeZoneOffset.js'


/**
 * @param {(Date|string)} dt 
 * @return {string} iso8601 string
 */
export default function utcToNY(dt) {
  const offset =  _getTimeZoneOffset(new Date(), 'utc') - _getTimeZoneOffset(new Date(), 'America/New_York')


  if (typeof(dt) === 'string') {
    if (!dt.includes('Z')) {
      throw new Error("Warning: utcToNY() received a UTC dt string that is missing 'Z'.")
    }

    const localDT = addMinutes(new Date(dt), offset)

    const iso_str = localDT.toISOString()

    return iso_str
  }

  if (dt instanceof Date) {
    let newdt = addMinutes(dt, offset)

    return newdt.toISOString()
  }
}