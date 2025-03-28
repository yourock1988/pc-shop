const details = {
  ok: {
    success: true,
    code: 200,
    status: 'OK',
    message: 'resource successfully retreived.',
  },

  created: {
    success: true,
    code: 201,
    status: 'Created',
    message: 'resource successfully created.',
  },

  noContent: {
    success: true,
    code: 204,
    status: 'No Content',
    message: 'resource successfully deleted.',
  },

  badRequest: {
    success: false,
    code: 400,
    status: 'Bad Request',
    message: 'incorrect body of request.',
  },

  unauthorized: {
    success: false,
    code: 401,
    status: 'Unauthorized',
    message: 'you need to authenticate to access that resource.',
  },

  forbidden: {
    success: false,
    code: 403,
    status: 'Forbidden',
    message: 'not enough permissions to access that resource.',
  },

  notFound: {
    success: false,
    code: 404,
    status: 'Not Found',
    message: 'that resource does not exist.',
  },

  methodNotAllowed: {
    success: false,
    code: 405,
    status: 'Method Not Allowed',
    message: 'that resource does not support requested method.',
  },

  internalServerError: {
    success: false,
    code: 500,
    status: 'Internal Server Error',
    message: 'your request crashed the server. please stop doing that.',
  },
}

class View {
  constructor() {}

  setRes(res) {
    this.res = res
    return this
  }

  send(datail, payload) {
    const data = Object.assign(datail, { payload })
    this.res.status(datail.code).json(data)
  }

  renderOK(payload) {
    this.send(details.ok, payload)
  }

  renderCreated(payload) {
    this.send(details.created, payload)
  }

  renderNoContent(payload) {
    this.send(details.noContent, payload)
  }

  renderBadRequest(payload) {
    this.send(details.badRequest, payload)
  }

  renderUnauthorized(payload) {
    this.send(details.unauthorized, payload)
  }

  renderForbidden(payload) {
    this.send(details.forbidden, payload)
  }

  renderNotFound(payload) {
    this.send(details.notFound, payload)
  }

  renderMethodNotAllowed(payload) {
    this.send(details.methodNotAllowed, payload)
  }

  renderInternalServerError(payload) {
    this.send(details.internalServerError, payload)
  }
}

module.exports = View
