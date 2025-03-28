const bindSelf = require('@yourock88/bind-self').default

class Controller {
  constructor(view, model) {
    bindSelf(this)
    this.view = view
    this.model = model
  }

  async createResource(req, res) {
    const parentId = req.parentId
    const payload = req.body
    const created = await this.model.createEntity(payload, parentId)
    if (created === 'database_error') {
      return this.view.setRes(res).renderInternalServerError(created)
    }
    this.view.setRes(res).renderCreated(created)
  }

  async readResources(req, res) {
    const parentId = req.parentId
    const readed = await this.model.readEntities(parentId)
    if (readed === 'database_error') {
      return this.view.setRes(res).renderInternalServerError(readed)
    }
    this.view.setRes(res).renderOK(readed)
  }

  async readResourceById(req, res) {
    const id = req.params.id
    const parentId = req.parentId
    const readed = await this.model.readEntityById(id, parentId)
    if (readed === 'database_error') {
      return this.view.setRes(res).renderInternalServerError(readed)
    }
    if (readed === null) {
      return this.view.setRes(res).renderNotFound(readed)
    }
    this.view.setRes(res).renderOK(readed)
  }

  async updateResourceById(req, res) {
    const id = req.params.id
    const parentId = req.parentId
    const payload = req.body
    const updated = await this.model.updateEntityById(id, payload, parentId)
    if (updated === 'database_error') {
      return this.view.setRes(res).renderInternalServerError(updated)
    }
    if (updated === null) {
      return this.view.setRes(res).renderNotFound(updated)
    }
    this.view.setRes(res).renderOK(updated)
  }

  async deleteResourceById(req, res) {
    const id = req.params.id
    const parentId = req.parentId
    const deleted = await this.model.deleteEntityById(id, parentId)
    if (deleted === 'database_error') {
      return this.view.setRes(res).renderInternalServerError(deleted)
    }
    if (deleted === null) {
      return this.view.setRes(res).renderNotFound(deleted)
    }
    this.view.setRes(res).renderNoContent(deleted)
  }
}

module.exports = Controller
