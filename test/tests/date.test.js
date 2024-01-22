import chai from 'chai'
import { describe, it } from 'mocha'

const expect = chai.expect

import { isMarketOpenToday } from '#src'


describe("Test", function() {
  it("returns true is 1+1=2", function() {
    expect(1+1).to.equal(2)
  })
})

describe("Tests if the market is open or closed on a given date.", function() {
  const saturday = new Date("2022-10-01")
  const sunday = new Date(Date.parse("2022-10-02"))
  const monday = new Date(Date.parse("2022-10-03"))
  const tuesday = new Date(Date.parse("2022-10-04"))
  const wednesday = new Date(Date.parse("2022-10-05"))
  const thursday = new Date(Date.parse("2022-10-06"))
  const friday = new Date("2022-09-30")

  const holiday = new Date("2022-01-01")


  it("returns false is the date is a weekend.", function() {
    expect(isMarketOpenToday(saturday)).to.equal(false)
    expect(isMarketOpenToday(sunday)).to.equal(false)
  })

  it("returns true if the date is a weekday.", function() {
    expect(isMarketOpenToday(monday)).to.equal(true)
    expect(isMarketOpenToday(tuesday)).to.equal(true)
    expect(isMarketOpenToday(wednesday)).to.equal(true)
    expect(isMarketOpenToday(thursday)).to.equal(true)
    expect(isMarketOpenToday(friday)).to.equal(true)
  })

  it("returns false if the date is a holiday.", function() {
    expect(isMarketOpenToday(holiday)).to.equal(false)
  })
})
