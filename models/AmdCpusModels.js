var knex = require('../database/connection');

class AmdCpusModels{
  
  async findAllCpu(){
    try{
        var result = await knex.select(['id', 'amdcpuname', 'amdcpugen', 'amdcpuversion']).table('amdcpus');
        return result;
    }catch(err){
      console.log(err);
      return [];
    };
  };

  async findByIdCpu(id){
    try{
      var result = await knex.select(['id', 'amdcpuname', 'amdcpugen', 'amdcpuversion']).where({id:id}).table('amdcpus');

      if(result.length > 0){
        return result[0];
      }else{
        return undefined;
      }
    }catch(err){
      console.log(err);
      return undefined;
    };
  };

  async findByNameCpu(cpuname){
    var result = await knex.select(['id', 'amdcpuname', 'amdcpugen', 'amdcpuversion']).where({amdcpuname:cpuname}).table('amdcpus');

    try{
      if(result.length > 0){
        return result[0];
      }else{
        return undefined;
      }
    }catch(err){
      console.log(err);
      return undefined;
    };
  };

  async createCpu(amdcpuname, amdcpugen, amdcpuversion){
    try{
      await knex.insert({amdcpuname, amdcpugen, amdcpuversion}).table('amdcpus');
    }catch(err){
      console.log(err);
    };
  };

  async findNameCpu(cpuname){
    try{
      var result = await knex.select('*').from('amdcpus').where({amdcpuname: cpuname});

      if(result.length > 0){
        return true;
      }else{
        return false;
      }
    }catch(err){
      console.log(err);
      return false;
    };
  };

  async UpdateCPU(id, amdcpuname, amdcpugen, amdcpuversion){
    var oldcpu = await this.findByIdCpu(id);

    if(oldcpu != undefined){
      var editCpu = {};

      if(amdcpuname == undefined || amdcpuname == '' || amdcpuname[0] == ' ' || amdcpugen == undefined || amdcpugen == '' || amdcpugen[0] == ' ' || amdcpuversion == undefined || amdcpuversion == '' || amdcpuversion[0] == ' '){

        return {status: false, err: 'Nome de CPU, geração ou versão invalido.'};

      }else{
        editCpu.amdcpuname = amdcpuname;
        editCpu.amdcpugen = amdcpugen;
        editCpu.amdcpuversion = amdcpuversion;

        console.log(editCpu, ' CPU, geração e versão atualizada com sucesso!' + ' ||| Console update CPU - AmdCpusModels');

        try{
          await knex.update(editCpu).where({id:id}).table('amdcpus');
          return true;
        }catch(err){
          return {status: false, err: err};
        };
      };
    }else{
      return {status: false, err: 'CPU não existe.'};
    };
  };

  async Delete(id){
    var AmdCpu = await this.findByIdCpu(id);

    if(AmdCpu != undefined){
      try{
        await knex.delete().where({id:id}).table('amdcpus');
        return {status: true};
      }catch(err){
        console.log(err);
      }
    }else{
      return {status: false, err: 'CPU não existe.'}
    }
  };

};

module.exports = new AmdCpusModels();