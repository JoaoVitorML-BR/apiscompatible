var Cpus = require('../models/IntelCpusModels');

class IntelCpusController{
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
    var {intelcpuname, intelcpuversion, intelcpulga} = req.body;

    if(intelcpuname == undefined || intelcpuversion == undefined || intelcpulga == undefined){
      res.status(406);
      res.json({err: 'Dados invalidos, confira e tente novamente.'});
      return;
    };

    if(intelcpuname == '' || intelcpuversion == '' || intelcpulga == '' || intelcpuname[0] == ' ' || intelcpuversion[0] == ' ' || intelcpulga[0] == ' '){
      res.status(406);
      res.json({err: 'Você precisa preencher todos os campos corretamente.'});
      return;
    };

    var cpuExists = await Cpus.findNameCpu(intelcpuname);

    if(cpuExists){
      res.status(406);
      res.json({err: 'A CPU já está cadastrada.'});
      return;
    };

    await Cpus.createCpu(intelcpuname, intelcpuversion, intelcpulga);
    res.status(200);
    res.send('CPU cadastrada com sucesso!');
  };

  async edit(req, res){
    var {id, intelcpuname, intelcpuversion, intelcpulga} = req.body;
    console.log(id, intelcpuname, intelcpuversion, intelcpulga, '||| Console Edit AmdCpus');
    var result = await Cpus.UpdateCPU(id, intelcpuname, intelcpuversion, intelcpulga);
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

module.exports = new IntelCpusController();