function authentication(req, res, next) {
  if (req.cookies.session !== 'ff0099aa') {
    res.cookie('session', 'ff0099aa', {
      secure: true,
      sameSite: 'none',
    })
    res.status(200).json({ success: true, userId: 3 })
  } else {
    res.status(200).json({ success: true, userId: 3 })
  }
}

function authorization(req, res, next) {
  if (req.cookies.session !== 'ff0099aa') {
    res.status(401).json({ success: false, reason: 'unauthorized' })
  } else {
    next()
  }
}

function notFound(req, res) {
  res.status(404).json({
    success: false,
    message: 'requested resource does not exist',
  })
}

function idToParentId(req, res, next) {
  req.parentId ??= req.params.id
  next()
}

module.exports = { authentication, authorization, notFound, idToParentId }
