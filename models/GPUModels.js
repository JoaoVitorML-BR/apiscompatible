const knex = require('../database/connection')

class GPUModels{
  async findAll(){
  try{
    const result = await knex.select(['id', 'namegpu', 'vram', 'operatingvoltage']).table('amdintelgpu');
    return result
    }catch(err){
      console.log(err);
      return [];
    };
  };

  async findById(id){
    try{
      const result = await knex.select(['id', 'namegpu', 'vram', 'operatingvoltage']).where({id:id}).table('amdintelgpu');
      if(result.length > 0){
        return result[0];
      }else{
        return undefined;
      };
    }catch(err){
      console.log(err);
      return undefined;
    };
  };

  async findByName(namegpu){
    try{
      const result = await knex.select(['id', 'namegpu', 'vram', 'operatingvoltage']).where({namegpu: namegpu}).table('amdintelgpu');

      if(result.length > 0){
        return result[0];
      }else{
        return undefined;
      };
    }catch(err){
      console.log(err);
      return undefined;
    };
  };

  async createGPU(namegpu, vram, operatingvoltage){
    try{
      await knex.insert({namegpu, vram, operatingvoltage}).table('amdintelgpu');
    }catch(err){
      console.log(err);
    };
  };

  async findName(namegpu){
    try{
      const result = await knex.select('*').from('amdintelgpu').where({namegpu: namegpu});
      
      if(result.length > 0){
        return true;
      }else{
        return false;
      };
    }catch(err){
      console.log(err);
      return false;
    };
  };

  async UpdateGPU(id, namegpu, vram, operatingvoltage){
    const oldGPU = await this.findById(id);

    if(oldGPU != undefined){
      const editGPU = {};

      if(namegpu == undefined || namegpu == '' || namegpu[0] == ' ' || vram == undefined || vram == '' || vram[0] == ' ' || [0] == ' ' || operatingvoltage == undefined || operatingvoltage == '' || operatingvoltage[0] == ' '){

        return {status: false, err: 'Nome de GPU, armazenamento ou voltagem invalido.'};

      }else{
        editGPU.namegpu = namegpu;
        editGPU.vram = vram;
        editGPU.operatingvoltage = operatingvoltage;

        console.log(editGPU, 'GPU atualizado com sucesso.');

        try{
          await knex.update(editGPU).where({id:id}).table('amdintelgpu');
          return true;
        }catch(err){
          return {status: false, err: err};
        };
      };
    }else{
      return {status: false, err: 'GPU não existe.'};
    };
  };

  async Delete(id){
    const GPUDelete = await this.findById(id);

    if(GPUDelete != undefined){
      try{
        await knex.delete().where({id:id}).table('amdintelgpu');
        return {status: true};
      }catch(err){
        console.log(err);
      }
    }else{
      return {status: false, err: 'GPU não existe.'}
    }
  };


  // RELATIONSHIP AMD
  async CreateRelationShipAmdGPU(cpu_id, amdgpu_id, gpu_name, gpu_voltage){
    try{
      await knex.insert({cpu_id, amdgpu_id, gpu_name, gpu_voltage}).table('amdgpu_cpu')
    }catch(err){
      console.log(err);
    };
  };

  // to see which GPU are compatible with the motherboard type its id and it will return a json
  async iscompatibleGPUAMD(id_cpu){
    try{
      const gpucompatibles = await knex.select().table('amdgpu_cpu')
      .innerJoin('amdcpus', 'amdcpus.id', 'amdgpu_cpu.cpu_id')
      .where({
        cpu_id: id_cpu
      });
    

      const gpucompatiblesFilter = new Map();

      gpucompatibles.forEach(namegpu => {
        if(!gpucompatiblesFilter.has(namegpu.gpu_name)){
          gpucompatiblesFilter.set(namegpu.gpu_name, namegpu);
        };
      });

      return [...gpucompatiblesFilter.values()];
    }catch(err){
      console.log('Erro ao criar relacionamento GPU_AMD_MOTHEBOARD');
      return {status: false, err: err};
    };
  };


  // RELATIONSHIP INTEL

  async CreateRelationShipIntelGPU(cpu_id, intelgpu_id, gpu_name, gpu_voltage){
    try{
      await knex.insert({cpu_id, intelgpu_id, gpu_name, gpu_voltage}).table('intelgpu_cpu')
    }catch(err){
      console.log(err);
    };
  };

  // to see which GPU are compatible with the motherboard type its id and it will return a json
  async iscompatibleGPUIntel(id_cpu){
    try{
      const gpucompatibles = await knex.select().table('intelgpu_cpu')
      .innerJoin('intelcpus', 'intelcpus.id', 'intelgpu_cpu.cpu_id')
      .where({
        cpu_id: id_cpu
      });
    

      const gpucompatiblesFilter = new Map();

      gpucompatibles.forEach(namegpu => {
        if(!gpucompatiblesFilter.has(namegpu.gpu_name)){
          gpucompatiblesFilter.set(namegpu.gpu_name, namegpu);
        };
      });

      return [...gpucompatiblesFilter.values()];
    }catch(err){
      console.log('Erro ao criar relacionamento GPU_AMD_MOTHEBOARD');
      return {status: false, err: err};
    };
  };

};

module.exports = new GPUModels();