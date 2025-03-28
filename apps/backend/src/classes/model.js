const { objectToCamel } = require('ts-case-convert')

class Model {
  constructor(database) {
    this.database = database
  }

  async createEntity(payload, parentId) {
    const sqlVars = Object.assign(payload, { parentId })
    const inserted = await this.database.insertRecord(sqlVars)
    return objectToCamel(inserted)
  }

  async readEntities(parentId) {
    const sqlVars = { parentId }
    const selected = await this.database.selectRecords(sqlVars)
    return objectToCamel(selected)
  }

  async readEntityById(id, parentId) {
    const sqlVars = { id, parentId }
    const selected = await this.database.selectRecordById(sqlVars)
    return objectToCamel(selected)
  }

  async updateEntityById(id, payload, parentId) {
    const sqlVars = Object.assign(payload, { id, parentId })
    const updated = await this.database.updateRecord(sqlVars)
    return objectToCamel(updated)
  }

  async deleteEntityById(id, parentId) {
    const sqlVars = { id, parentId }
    const deleted = await this.database.deleteRecord(sqlVars)
    return objectToCamel(deleted)
  }
}

module.exports = Model
