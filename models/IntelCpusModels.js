var knex = require('../database/connection');

class IntelCpusModels{
  
  async findAllCpu(){
    try{
        var result = await knex.select(['id', 'intelcpuname', 'intelcpuversion', 'intelcpulga']).table('intelcpus');
        return result;
    }catch(err){
      console.log(err);
      return [];
    };
  };

  async findByIdCpu(id){
    try{
      var result = await knex.select(['id', 'intelcpuname', 'intelcpuversion', 'intelcpulga']).where({id:id}).table('intelcpus');

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
    var result = await knex.select(['id', 'intelcpuname', 'intelcpuversion', 'intelcpulga']).where({intelcpuname:cpuname}).table('intelcpus');

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

  async createCpu(intelcpuname, intelcpuversion, intelcpulga){
    try{
      await knex.insert({intelcpuname, intelcpuversion, intelcpulga}).table('intelcpus');
    }catch(err){
      console.log(err);
    };
  };

  async findNameCpu(cpuname){
    try{
      var result = await knex.select('*').from('intelcpus').where({intelcpuname: cpuname});

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

  async UpdateCPU(id, intelcpuname, intelcpuversion, intelcpulga){
    var oldcpu = await this.findByIdCpu(id);

    if(oldcpu != undefined){
      var editCpu = {};

      if(intelcpuname == undefined || intelcpuname == '' || intelcpuname[0] == ' ' || intelcpuversion == undefined || intelcpuversion == '' || intelcpuversion[0] == ' ' || intelcpulga == undefined || intelcpulga == '' || intelcpulga[0] == ' '){

        return {status: false, err: 'Nome de CPU, geração ou versão invalido.'};

      }else{
        editCpu.intelcpuname = intelcpuname;
        editCpu.intelcpuversion = intelcpuversion;
        editCpu.intelcpulga = intelcpulga;

        console.log(editCpu, ' CPU, geração e versão atualizada com sucesso!' + ' ||| Console update CPU - AmdCpusModels');

        try{
          await knex.update(editCpu).where({id:id}).table('intelcpus');
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
    var IntelCpu = await this.findByIdCpu(id);

    if(IntelCpu != undefined){
      try{
        await knex.delete().where({id:id}).table('intelcpus');
        return {status: true};
      }catch(err){
        console.log(err);
      }
    }else{
      return {status: false, err: 'CPU não existe.'}
    }
  };

};

module.exports = new IntelCpusModels();