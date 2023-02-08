const GPUModels = require('../models/GPUModels');

class GPUController{
  async index(req, res){
    const gpu = await GPUModels.findAll();
    res.json(gpu);
  };

  async findGPU(req, res){
    const id = req.params.id;
    const gpu = await GPUModels.findById(id);
    if(gpu == undefined){
      res.status(404);
      res.json({});
    }else{
      res.status(200);
      res.json(gpu);
    };
  };

  async findGPUByName(req, res){
    const nameGPU = req.params.name;
    const searchGPUName = await GPUModels.findByName(nameGPU);

    if(searchGPUName == undefined){
      res.status(404);
      res.json({});
    }else{
      res.status(200);
      res.json(searchGPUName);
    };
  };

  async create(req, res){
    const {namegpu, vram, gpuoperatingvoltage} = req.body;

    console.log(namegpu, vram, gpuoperatingvoltage);

    if(namegpu == undefined || vram == undefined || gpuoperatingvoltage == undefined){
      res.status(400);
      res.json({err: 'Campos preenchidos invalido.'});
      return;
    };

    if(namegpu[0] == '' || vram[0] == '' || gpuoperatingvoltage[0] == ''){
      res.status(400);
      res.json('Você precisa preencher todos os campos corretamente.');
      return;
    };

    const GPUExists = await GPUModels.findByName(namegpu);

    if(GPUExists){
      console.log(GPUExists);
      res.status(406);
      res.json({err: 'GPU já está cadastrado.'});
      return;
    };

    await GPUModels.createGPU(namegpu, vram, gpuoperatingvoltage);
    res.status(200);
    res.send('GPU cadastrado com sucesso!');
  };

  async edit(req, res){
    const {id, namegpu, vram, gpuoperatingvoltage} = req.body;
    console.log(id, namegpu, vram, gpuoperatingvoltage, '||| Console Edit MemoryRam');
    const result = await GPUModels.UpdateGPU(id, namegpu, vram, gpuoperatingvoltage);
    console.log(result, '||| Console do result edit GPU');
    if(result != undefined){
      if(result.status){
        res.status(200);
        res.send('GPU atualizado com sucesso!');
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
    const id = req.params.id;
    const result = await GPUModels.Delete(id);

    if(result.status){
      res.status(200);
      res.send('GPU deletado com sucesso.');
    }else{
      res.status(406);
      res.send(result);
    };
  };
  
  async createAmdMotheboardGPURelation(req, res){
    const {cpu_id, amdgpu_id, gpu_name, gpu_voltage} = req.body;

    console.log(cpu_id, amdgpu_id, gpu_name, gpu_voltage);

    await GPUModels.CreateRelationShipAmdGPU(cpu_id, amdgpu_id, gpu_name, gpu_voltage);

    res.status(200);
    res.send('Relacionamento-AMD-GPU criado com sucesso!');
  };

  async compatiblesGPUAmd(req, res){
    const id_cpu = req.params.id_cpu;
    const compatiblesGPU = await GPUModels.iscompatibleGPUAMD(id_cpu);
    res.json(compatiblesGPU);
    console.log(compatiblesGPU);
  };

  // CONTROLLER INTEL RELATIONSHIP

  async createIntelMotheboardGPURelation(req, res){
    const {cpu_id, intelgpu_id, gpu_name, gpu_voltage} = req.body;

    console.log(cpu_id, intelgpu_id, gpu_name, gpu_voltage);

    await GPUModels.CreateRelationShipIntelGPU(cpu_id, intelgpu_id, gpu_name, gpu_voltage);

    res.status(200);
    res.send('Relacionamento-Intel-GPU criado com sucesso!');
  };

  async compatiblesGPUIntel(req, res){
    const id_cpu = req.params.id_cpu;
    const compatiblesGPU = await GPUModels.iscompatibleGPUIntel(id_cpu);
    res.json(compatiblesGPU);
    console.log(compatiblesGPU);
  };  
};

module.exports = new GPUController();