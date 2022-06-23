async function checkHealth(req, res) {
    return res.status(200).json({
        status: true
    })
}

module.exports = {
    checkHealth
}