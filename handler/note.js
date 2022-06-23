const noteModel = require('../models/notes')


const create = async(req, res) => {
    const note = await noteModel.create(req.body)
    res.status(200).json(note)
}

module.exports = {
    create
}