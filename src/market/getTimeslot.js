import utcToNY from '../timezone/utcToNY.js'


/**
 * @param {string} dtISO
 * @return {string('premarket'|'regular'|'afterhours')}
 * @throws {Error} if dtISO does not fall within a timeslot.
 */
export default function getTimeslot(dtISO = ( new Date() ).toISOString()) {
    const time = dtISO.split('T')[1].split('Z')[0]
    const nyTime = utcToNY(dtISO).split('T')[1].split('Z')[0]
    
    const startOfDay = '04:00:00'
    const startOfOpen = '09:30:00'
    const endOfOpen = '216:00:00'
    const endOfDay = '20:00:00'

    if (nyTime >= startOfDay && nyTime <= startOfOpen) return 'premarket'
    else if (nyTime >= startOfOpen && nyTime <= endOfOpen) return 'rth'
    else if (nyTime >= endOfOpen && nyTime <= endOfDay) return 'afterhours'
    else throw new Error("Invalid time. dt does not fall within a timeslot.")
}