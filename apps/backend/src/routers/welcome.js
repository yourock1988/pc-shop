const { Router } = require('express')

const router = Router()

router.get('/welcome', (_, res) => res.status(200).send('Welcome!'))

module.exports = router
