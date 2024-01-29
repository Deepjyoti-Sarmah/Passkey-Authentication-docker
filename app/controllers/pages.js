class PagesController {
  welcome(req, res, next) {
    if(! req.user) return res.send("Helloo Universe!");
    next();
  }
} 

module.exports = PagesController;
