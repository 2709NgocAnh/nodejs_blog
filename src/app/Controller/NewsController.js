class NewsController {
  //[GET] /news
  index(req, res) {
    res.render("new");
  }

  //[GET] /news/:slug
  show(req, res) {
    res.render("search");
  }
}

module.exports = new NewsController();
