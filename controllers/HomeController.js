class HomeController{

  async index(req, res){
      res.send("API Rodando até aqui...");
  };

}

module.exports = new HomeController();