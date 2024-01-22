import isMarketClosed from './isMarketClosed.js'


/**
 *  @param   {Date} dt
 *  @returns {boolean}
 */
export default function isMarketOpen(dt = ( new Date() ).toISOString()) {
    return !isMarketClosed(dt)
}