var SSDModels = require('../models/SSDModels');

class SSDController{
  async index(req, res){
    var ssd = await SSDModels.findAll();
    res.json(ssd);
  };

  async findSSD(req, res){
    var id = req.params.id;
    var ssd = await SSDModels.findById(id);
    if(ssd == undefined){
      res.status(404);
      res.json({});
    }else{
      res.status(200);
      res.json(ssd);
    };
  };

  async findSSDByName(req, res){
    var nameSSD = req.params.namessd;
    var searchSSDName = await SSDModels.findByName(nameSSD);

    if(searchSSDName == undefined){
      res.status(404);
      res.json({});
    }else{
      res.status(200);
      res.json(searchSSDName);
    };
  };

  async create(req, res){
    var {namessd, sizessd} = req.body;

    console.log(namessd, sizessd);

    if(namessd == undefined || sizessd == undefined){
      res.status(400);
      res.json({err: 'Campos preenchidos invalido.'});
      return;
    };

    if(namessd[0] == '' || sizessd[0] == '' ){
      res.status(400);
      res.json('Você precisa preencher todos os campos corretamente.');
      return;
    };

    var SSDExists = await SSDModels.findByName(namessd);

    if(SSDExists){
      console.log(SSDExists);
      res.status(406);
      res.json({err: 'SSD já está cadastrado.'});
      return;
    };

    await SSDModels.createSSD(namessd, sizessd);
    res.status(200);
    res.send('SSD cadastrado com sucesso!');
  };

  async edit(req, res){
    var {id, namessd, sizessd} = req.body;
    console.log(id, namessd, sizessd, '||| Console Edit MemoryRam');
    var result = await SSDModels.UpdateSSD(id, namessd, sizessd);
    console.log(result, '||| Console do result edit SSD');
    if(result != undefined){
      if(result.status){
        res.status(200);
        res.send('SSD atualizado com sucesso!');
      }else{
        res.status(404);
        res.send(result.err);
      }
    }else{
        res.status(406);
        res.send('Pane no sistema, ocorreu algum erro no servidor!');
    };;
  };

  async remove(req, res){
    var id = req.params.id;
    var result = await SSDModels.Delete(id);

    if(result.status){
      res.status(200);
      res.send('SSD deletado com sucesso.');
    }else{
      res.status(406);
      res.send(result);
    };
  };
  
  async createAmdMotheboardSSDRelation(req, res){
    var {amdmotheboard_id, amdssd_id, ssd_name} = req.body;

    console.log(amdmotheboard_id, amdssd_id, ssd_name);

    await SSDModels.CreateRelationShipAmdSSD(amdmotheboard_id, amdssd_id, ssd_name);

    res.status(200);
    res.send('Relacionamento-AMD-SSD criado com sucesso!');
  };

  async compatiblesSSD(req, res){
    var id_motheboard = req.params.id;
    var compatiblesSSD = await SSDModels.iscompatibleSSDAMD(id_motheboard);
    res.json(compatiblesSSD);
    console.log(compatiblesSSD);
  };

  // INTEL RELATIONSHIP

  async createIntelMotheboardSSDRelation(req, res){
    var {intelmotheboard_id, intelssd_id, ssd_name} = req.body;

    console.log(intelmotheboard_id, intelssd_id, ssd_name);

    await SSDModels.CreateRelationShipIntelSSD(intelmotheboard_id, intelssd_id, ssd_name);

    res.status(200);
    res.send('Relacionamento-INTEL-SSD criado com sucesso!');
  };

  async compatiblesSSDIntel(req, res){
    var id_motheboard = req.params.id;
    var compatiblesSSD = await SSDModels.iscompatibleSSDIntel(id_motheboard);
    res.json(compatiblesSSD);
    console.log(compatiblesSSD);
  };

};

module.exports = new SSDController();