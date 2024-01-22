import chai from 'chai'
import { describe, it } from 'mocha'
import path from 'path'

const expect = chai.expect

import {createDirsAndFiles, deleteDirsAndFiles, getTestDir} from '#src'



describe("Create some dirs and files, and then delete them.", function() {

  let testDir,
      path0, path1, path01, path01f,
      tmpPaths = []

  before(async () => {
     testDir = await getTestDir()

      path0 = path.join(testDir, 'tmp0')
      path1 = path.join(testDir, 'tmp1')
      path01f = path.join(testDir, 'tmp0', 'tmp01', 'tmp01f.txt')
      path01 = path.join(testDir, 'tmp0', 'tmp01')

      tmpPaths = [ path0, path1, path01, path01f ]
  })


  it("should create three folders and a file in each folder.", async function() {
      const res = await createDirsAndFiles(tmpPaths)

      expect(res).to.have.length(4)
      expect(res[0]).to.include(tmpPaths[0])
      expect(res[1]).to.include(tmpPaths[1])
      expect(res[2]).to.include(tmpPaths[2])
      expect(res[3]).to.include(tmpPaths[3])

      expect(res[0]).to.include('Created').and.not.include('Already exists')
      expect(res[1]).to.include('Created').and.not.include('Already exists')
      expect(res[2]).to.include('Created').and.not.include('Already exists')
      expect(res[3]).to.include('Created').and.not.include('Already exists')
  })


  it("should delete the created temp folders and files.", async function() {
      const res = await deleteDirsAndFiles(tmpPaths)

      expect(res).to.have.length(4)
      expect(res[0]).to.equal(tmpPaths[0])
      expect(res[1]).to.equal(tmpPaths[1])
      expect(res[2]).to.equal(tmpPaths[2])
      expect(res[3]).to.equal(tmpPaths[3]) 
  })


})
