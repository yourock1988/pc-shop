const ExpressRouter = require('express').Router
const { authorization, idToParentId } = require('../middleware')

class Router {
  constructor(resourcePath, controller) {
    this.router = ExpressRouter()
    this.routerById = ExpressRouter()
    this.controller = controller
    this.resourcePath = `/${resourcePath}`
    this.resourcePathById = `/:id(\\d+)`
    this.mws = [this.routerById]
    this.mwsId = [idToParentId]
  }

  auth() {
    this.mws.unshift(authorization)
    return this
  }

  sub(subrouter) {
    this.mwsId.push(subrouter)
    return this
  }

  mount() {
    this.routerById
      .use(this.resourcePathById, this.mwsId)
      .route(this.resourcePathById)
      .get(this.controller.readResourceById)
      .patch(this.controller.updateResourceById)
      .delete(this.controller.deleteResourceById)

    this.router
      .use(this.resourcePath, this.mws)
      .route(this.resourcePath)
      .post(this.controller.createResource)
      .get(this.controller.readResources)

    return this.router
  }
}

module.exports = Router
