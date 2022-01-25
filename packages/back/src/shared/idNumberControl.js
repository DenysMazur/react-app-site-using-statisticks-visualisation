const InvalidIdException = require('./InvalidIdException')

module.exports = (req, res, next) => {
  const id = Number.parseInt(req.params.id, 10) || Number.parseInt(req.body.id, 10)
  if (Number.isNaN(id)) {
    throw new InvalidIdException()
  }
  next()
}
