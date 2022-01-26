module.exports = (req, res, next) => {
  const pageAsNumber = Number.parseInt(req.query.page, 10)
  const sizeAsNumber = Number.parseInt(req.query.size, 10)

  let page = 0
  if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
    page = pageAsNumber - 1
  }

  let size = 50
  if (!Number.isNaN(sizeAsNumber) && !(sizeAsNumber > 50) && !(sizeAsNumber < 1)) {
    size = sizeAsNumber
  }
  req.pagination = {
    page,
    size
  }
  next()
}
