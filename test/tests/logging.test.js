import chai from 'chai'
import { describe, it } from 'mocha'

const expect = chai.expect

import { colorize, stripOutColors } from '#src'


import chalk from 'chalk';

const colorMappings = [
  { substring: '[api]', color: '#AD5E00' },
  { substring: '[ib_api]', color: '#4B4453' },
  { substring: '[op_api]', color: '#FF6F91' },
  { substring: '[proxy_manager]', color: '#C34A36' },
  { substring: '[smart_quotes]', color: '#FF8066' },

  { substring: '@ktr-srt/api', color: '#AD5E00' },
  { substring: '@ktr-srt/ib_api', color: '#4B4453' },
  { substring: '@ktr-srt/op_api', color: '#FF6F91' },
  { substring: '@ktr-srt/proxy_manager', color: '#C34A36' },
  { substring: '@ktr-srt/smart_quotes', color: '#FF8066' },

  { substring: 'from:(api', color: '#AD5E00' },
  { substring: 'from:(ib_api', color: '#4B4453' },
  { substring: 'from:(op_api', color: '#FF6F91' },
  { substring: 'from:(proxy_manager', color: '#C34A36' },
  { substring: 'from:(smart_quotes', color: '#FF8066' },

  { substring: '/api)', color: '#AD5E00' },
  { substring: '/ib_api)', color: '#4B4453' },
  { substring: '/op_api)', color: '#FF6F91' },
  { substring: '/proxy_manager)', color: '#C34A36' },
  { substring: '/smart_quotes)', color: '#FF8066' }
]



describe("Test", function() {
    let colorizedResult, decolorizedResult

    it("should colorize a string using the chalk lib.", function() {
        const testStr = "[api] This is a test string."

        colorizedResult = colorize(testStr, colorMappings)

        console.log(colorizedResult)
    })

    it("should decolorize the string.", function() {
        decolorizedResult = stripOutColors(result)

        console.log(decolorizedResult)
    })
})
