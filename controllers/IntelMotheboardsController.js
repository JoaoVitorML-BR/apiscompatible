var IntelMotheboardsModels = require('../models/IntelMotheboardsModels');

class IntelMotheboardsController{
  async index(req, res){
    var intelmotheboards = await IntelMotheboardsModels.findAllmotheboard();
    // console.log(intelmotheboards);
    res.json(intelmotheboards);
  };

  async findMotheboardIntel(req, res){
    var id = req.params.id;
    var motheboardIntel = await IntelMotheboardsModels.findById(id);
    if(motheboardIntel == undefined){
      res.status(404);
      res.json({});
    }else{
      res.status(200);
      res.json(motheboardIntel);
    };
  };

  async findMotheboardIntelByName(req, res){
    var nameMotheboardIntel = req.params.motheboardintel;
    var searchMotheboardNameIntel = await IntelMotheboardsModels.findName(nameMotheboardIntel);''

    if(searchMotheboardNameIntel == undefined){
      res.status(404);
      res.json({});
    }else{
      res.status(200);
      res.json(searchMotheboardNameIntel);
    };
  };

  async createIntelMotheboard(req, res){
    var {motheboardintel, motheboardversionintel} = req.body;
    console.log(motheboardintel, motheboardversionintel);

    if(motheboardintel == undefined || motheboardversionintel == undefined){
      res.json(400);
      res.json({err: 'Nome de placa-mãe ou versão invalido!'});
      return;
    };

    if(motheboardintel[0] == '' || motheboardversionintel == '' || motheboardintel[0] == ' ' || motheboardversionintel == ' '){
      res.status(400);
      res.json('Você precisa preencher todos os campos corretamente.');
      return;
    };

    var motheboardExists = await IntelMotheboardsModels.findName(motheboardintel);

    if(motheboardExists){
      res.status(406);
      res.json({err: 'Placa-mãe já está cadastrada.'});
      return;
    };

    await IntelMotheboardsModels.createMotheboard(motheboardintel, motheboardversionintel);
    res.status(200);
    res.send('Placa-mãe cadastrada com sucesso!');

  };

  async edit(req, res){
    var {id, motheboardintel, motheboardversionintel} = req.body;
    console.log(id, motheboardintel, motheboardversionintel, '||| Console Edit Motheboards');
    var result = await IntelMotheboardsModels.UpdateMotheboard(id, motheboardintel, motheboardversionintel);
    console.log(result, '||| Console do result edit motheboards');
    if(result != undefined){
      if(result.status){
        res.status(200);
        res.send('Placa-mãe atualizada com sucesso!');
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
    var result = await IntelMotheboardsModels.Delete(id);

    if(result.status){
      res.status(200);
      res.send('Placa-mãe deletada com sucesso.');
    }else{
      res.status(406);
      res.send(result);
    };
  };

  async createIntelMotheboardRelation(req, res){
    var {intelmotheboard_id, cpu_id, cpu_name, memoryram_name, memoryram_id} = req.body;
    console.log(intelmotheboard_id, cpu_id, cpu_name, memoryram_name, memoryram_id);

    await IntelMotheboardsModels.CreateRelationShipIntel(intelmotheboard_id, cpu_id, cpu_name, memoryram_name, memoryram_id);    

    res.status(200);
    res.send('Relacionamento criado com sucesso!');
  }

  async compatiblescpu(req, res){
    var id_motheboard = req.params.id;
    var compatiblesCPU = await IntelMotheboardsModels.isCompatibleCpuIntel(id_motheboard);
    res.json(compatiblesCPU);
  };

  async compatiblesmemoryram(req, res){
    var id_motheboard = req.params.id;
    var compatiblesMemoryRam = await IntelMotheboardsModels.isCompatibleMemoryRamIntel(id_motheboard);
    res.json(compatiblesMemoryRam);
  };

};

module.exports = new IntelMotheboardsController();
