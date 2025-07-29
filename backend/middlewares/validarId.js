module.exports = (req, res, next) => {
    const id = req.params.id

    if(!id || typeof id !== "string"){
        return res.status(400).json({error: "ID invalido"})
    }
    next()
}