var Cpus = require('../models/AmdCpusModels');

class AmdCpusController{
  async index(req, res){
    var cpus = await Cpus.findAllCpu();
    res.json(cpus);
  };

  async findCpu(req, res){
    var id = req.params.id;
    var cpu = await Cpus.findByIdCpu(id);
    if(cpu == undefined){
      res.status(404);
      res.json({});
    }else{
      res.status(200);
      res.json(cpu);
    };
  };

  async create(req, res){
    var {amdcpuname, amdcpugen, amdcpuversion} = req.body;

    if(amdcpuname == undefined || amdcpugen == undefined || amdcpuversion == undefined){
      res.status(406);
      res.json({err: 'Dados invalidos, confira e tente novamente.'});
      return;
    };

    if(amdcpuname == '' || amdcpugen == '' || amdcpuversion == '' || amdcpuname[0] == ' ' || amdcpugen[0] == ' ' || amdcpuversion[0] == ' ' ){
      res.status(406);
      res.json({err: 'Você precisa preencher todos os campos corretamente.'});
      return;
    };

    var cpuExists = await Cpus.findNameCpu(amdcpuname);

    if(cpuExists){
      res.status(406);
      res.json({err: 'A CPU já está cadastrada.'});
      return;
    };

    await Cpus.createCpu(amdcpuname, amdcpugen, amdcpuversion);
    res.status(200);
    res.send('CPU cadastrada com sucesso!');
  };

  async edit(req, res){
    var {id, amdcpuname, amdcpugen, amdcpuversion} = req.body;
    console.log(id, amdcpuname, amdcpugen, amdcpuversion, '||| Console Edit AmdCpus');
    var result = await Cpus.UpdateCPU(id, amdcpuname, amdcpugen, amdcpuversion);
    console.log(result, '||| Console do result edit AmdCpus');
    if(result != undefined){
      if(result.status){
        res.status(200);
        res.send('CPU atualizada com sucesso!');
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
    var result = await Cpus.Delete(id);

    if(result.status){
      res.status(200);
      res.send('CPU deletada com sucesso.');
    }else{
      res.status(406);
      res.send(result);
    };
  };

};

module.exports = new AmdCpusController();