import chai from 'chai'
import { describe, it } from 'mocha'
import path from 'path'

const expect = chai.expect

import {getPackageName} from '#src'



describe("Starting in given dir, walk up dirs until endDir, adding all dirs that match name.", function() {

  it("should return '@ktr-srt", async function() {
      const res = await getPackageName({})
      console.log(res)
  })

})
