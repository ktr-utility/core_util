import chai from 'chai'
import { describe, it } from 'mocha'
import path from 'path'

const expect = chai.expect

import {getDirname} from '@ktr-utility/core_util'

import {walkUpAndFindAll} from '#src'


const dirname = getDirname(import.meta.url)
const testResourcesDir = path.resolve(dirname, '..', 'test_resources', 'walkAndFind')


describe("Starting in given dir, walk up dirs until endDir, adding all dirs that match name.", function() {

  it("should return config folder.", async function() {
      const startDirname = path.join(testResourcesDir, 'a/b/c/d')
      const res = await walkUpAndFindAll('config', startDirname, testResourcesDir)

      expect(res).to.include(path.join(testResourcesDir, 'a/b/config'))
  })

  it("shouldn't return anything.", async function() {
      const startDirname = path.join(testResourcesDir, 'a/b/c/d')
      const res = await walkUpAndFindAll('config.json', startDirname, testResourcesDir)

      expect (res).to.have.length(0)
  })

  it("should return config/config.json file.", async function() {
      const startDirname = path.join(testResourcesDir, 'a/b/c/d')
      const res = await walkUpAndFindAll('config/config.json', startDirname, testResourcesDir)

      expect(res).to.include(path.join(testResourcesDir, 'a/b/config/config.json'))
  })

})
