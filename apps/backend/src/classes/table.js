const { db, sql } = require('../dbConnect')
const { resolveUpdatingMask } = require('../utils')

class Table {
  constructor(tableName, maskFields) {
    this.tableName = tableName
    this.maskFields = maskFields
  }

  async insertRecord(sqlVars) {
    const request = sql(`${this.tableName}/insert`)
    try {
      return await db.one(request, sqlVars)
    } catch (err) {
      return 'database_error'
    }
  }

  async selectRecords(sqlVars) {
    const request = sql(`${this.tableName}/select`)
    try {
      return await db.manyOrNone(request, sqlVars)
    } catch (err) {
      return 'database_error'
    }
  }

  async selectRecordById(sqlVars) {
    const request = sql(`${this.tableName}/select_by_id`)
    try {
      return await db.oneOrNone(request, sqlVars)
    } catch (err) {
      return 'database_error'
    }
  }

  async updateRecord(sqlVars) {
    this.updatingMask = resolveUpdatingMask(this.maskFields)
    sqlVars = Object.assign(this.updatingMask, sqlVars)
    const request = sql(`${this.tableName}/update`)
    try {
      return await db.oneOrNone(request, sqlVars)
    } catch (err) {
      return 'database_error'
    }
  }

  async deleteRecord(sqlVars) {
    const request = sql(`${this.tableName}/delete`)
    try {
      return await db.oneOrNone(request, sqlVars)
    } catch (err) {
      return 'database_error'
    }
  }
}

module.exports = Table
