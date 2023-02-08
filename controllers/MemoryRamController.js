var MemoryRamModels = require('../models/MemoryRamModels');

class MemoryRamController{
  async index(req, res){
    var memoryram = await MemoryRamModels.findAll();
    res.json(memoryram);
  };

  async findMemoryRam(req, res){
    var id = req.params.id;
    var memoryram = await MemoryRamModels.findById(id);
    if(memoryram == undefined){
      res.status(404);
      res.json({});
    }else{
      res.status(200);
      res.json(memoryram);
    };
  };

  async findMemoryRamByName(req, res){
    var nameMemoryRam = req.params.namememoryram;
    var searchMemoryRamName = await MemoryRamModels.findName(nameMemoryRam);

    if(searchMemoryRamName == undefined){
      res.status(404);
      res.json({});
    }else{
      res.status(200);
      res.json(searchMemoryRamName);
    };
  };

  async create(req, res){
    var {namememoryram, sizememoryram, frequencymemoryram, ddrversion} = req.body;

    console.log(namememoryram, sizememoryram, frequencymemoryram, ddrversion);

    if(namememoryram == undefined || sizememoryram == undefined || frequencymemoryram == undefined || ddrversion == undefined){
      res.status(400);
      res.json({err: 'Campos preenchidos invalido.'});
      return;
    };

    if(namememoryram[0] == '' || sizememoryram[0] == '' || frequencymemoryram[0] == '' || ddrversion[0] == ''){
      res.status(400);
      res.json('Você precisa preencher todos os campos corretamente.');
      return;
    };

    var memoryRamExists = await MemoryRamModels.findName(namememoryram);

    if(memoryRamExists){
      res.status(406);
      res.json({err: 'Memoria Ram já está cadastrada.'});
      return;
    };

    await MemoryRamModels.createMemoryRam(namememoryram, sizememoryram, frequencymemoryram, ddrversion);
    res.status(200);
    res.send('Memoria Ram cadastrada com sucesso!');

  };

  async edit(req, res){
    var {id, namememoryram, sizememoryram, frequencymemoryram, ddrversion} = req.body;
    console.log(id, namememoryram, sizememoryram, frequencymemoryram, ddrversion, '||| Console Edit MemoryRam');
    var result = await MemoryRamModels.UpdateMemoryRam(id, namememoryram, sizememoryram, frequencymemoryram, ddrversion);
    console.log(result, '||| Console do result edit MemoryRam');
    if(result != undefined){
      if(result.status){
        res.status(200);
        res.send('Memoria-ram atualizada com sucesso!');
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
    var result = await MemoryRamModels.Delete(id);

    if(result.status){
      res.status(200);
      res.send('Memoria ram deletada com sucesso.');
    }else{
      res.status(406);
      res.send(result);
    };
  };

};

module.exports = new MemoryRamController();