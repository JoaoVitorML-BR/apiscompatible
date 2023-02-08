var MotheboardsModels = require('../models/AmdMotheboardsModels');

class MotheboardController{
  async index(req, res){
    var motheboards = await MotheboardsModels.findAll();
    res.json(motheboards);
  };

  async findMotheboard(req, res){
    var id = req.params.id;
    var motheboard = await MotheboardsModels.findById(id);
    if( motheboard == undefined){
      res.status(404);
      res.json({});
    }else{
      res.status(200);
      res.json(motheboard);
    };
  };

  async findMotheboardByName(req, res){
    var nameMotheboard = req.params.motheboard;
    var searchMotheboardName = await MotheboardsModels.findName(nameMotheboard);

    if(searchMotheboardName == undefined){
      res.status(404);
      res.json({});
    }else{
      res.status(200);
      res.json(searchMotheboardName);
    };
  };

  async create(req, res){
    var {motheboard, motheboardversion} = req.body;

    console.log(motheboard, motheboardversion);

    if(motheboard == undefined || motheboardversion == undefined){
      res.status(400);
      res.json({err: 'Nome de placa mãe ou versão invalido!'});
      return;
    };

    if(motheboard[0] == '' || motheboardversion == '' || motheboard[0] == ' ' || motheboardversion == ' '){
      res.status(400);
      res.json('Você precisa preencher todos os campos corretamente.');
      return;
    };

    var motheboardExists = await MotheboardsModels.findName(motheboard); // here is breaking programing

    if(motheboardExists){
      res.status(406);
      res.json({err: 'Placa-mãe já está cadastrada.'});
      return;
    };

    await MotheboardsModels.createMotheboard(motheboard, motheboardversion);
    res.status(200);
    res.send('Placa-mãe cadastrada com sucesso!');

  };

  async edit(req, res){
    var {id, motheboard, motheboardversion} = req.body;
    console.log(id, motheboard, motheboardversion, '||| Console Edit Motheboards');
    var result = await MotheboardsModels.UpdateMotheboard(id, motheboard, motheboardversion);
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
    var result = await MotheboardsModels.Delete(id);

    if(result.status){
      res.status(200);
      res.send('Placa-mãe deletada com sucesso.');
    }else{
      res.status(406);
      res.send(result);
    };
  };

  async createAmdMotheboardRelation(req, res){
    var {amdmotheboard_id, cpu_id, cpu_name, memoryram_name, memoryram_id} = req.body;
    console.log(amdmotheboard_id, cpu_id, cpu_name, memoryram_name, memoryram_id);

    await MotheboardsModels.CreateRelationShipAmd(amdmotheboard_id, cpu_id, cpu_name, memoryram_name, memoryram_id);    

    res.status(200);
    res.send('Relacionamento-AMD criado com sucesso!');
  };


  async compatiblescpu(req, res){
    var id_motheboard = req.params.id;
    var compatiblesCPU = await MotheboardsModels.isCompatibleCpuAMD(id_motheboard);
    res.json(compatiblesCPU);
    console.log(compatiblesCPU);
  };

  async compatiblesmemoryram(req, res){
    var id_motheboard = req.params.id;
    var compatiblesMemoryRam = await MotheboardsModels.isCompatibleMemoryRamAmd(id_motheboard);
    res.json(compatiblesMemoryRam);
  };

};

module.exports = new MotheboardController();