const { Router } = require('express')

const healthHandler = require('../handler/health')
const noteHandler = require("../handler/note")

const router = Router()

router.get('/health', healthHandler.checkHealth)

router.post("/note", noteHandler.create)

module.exports = router