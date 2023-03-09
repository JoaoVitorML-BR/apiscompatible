//Here is the backend directly linked to the database
var knex = require('../database/connection');



class MotheboardsModels{
  async findAll(){
    try{
      var result = await knex.select(['id', 'motheboard', 'motheboardversion']).table('amdmotheboards');
      return result;
    }catch(err){
    console.log(err);
    return [];
   };
  };

  async findById(id){
    try{
      var result = await knex.select(['id', 'motheboard', 'motheboardversion']).where({id:id}).table('amdmotheboards');

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

  async findByName(motheboard){
    try{
      var result = await knex.select(['id' ,'motheboard', 'motheboardversion']).where({motheboard: motheboard}).table('amdmotheboards');

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


  async createMotheboard(motheboard, motheboardversion){

    try{
      await knex.insert({motheboard, motheboardversion}).table('amdmotheboards');
    }catch(err){
      console.log(err);
    };
  };

  async findName(motheboard){
    try{
      var result = await knex.select('*').from('amdmotheboards').where({motheboard: motheboard});
      
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

  async UpdateMotheboard(id, motheboard, motheboardversion){
    var oldmotheboard = await this.findById(id);

    if(oldmotheboard != undefined){
      var editMotheboard = {};

      if(motheboard == undefined || motheboard == '' || motheboard[0] == ' ' || motheboardversion == undefined || motheboardversion == '' || motheboardversion[0] == ' '){

        return {status: false, err: 'Nome de placa-mãe invalido.'};

      }else{
        editMotheboard.motheboard = motheboard;
        editMotheboard.motheboardversion = motheboardversion;

        console.log(editMotheboard, ' PLaca mãe e versão atualizada com sucesso!' + ' ||| Console update placa mãe - AmdMotheboardsModels');

        try{
          await knex.update(editMotheboard).where({id:id}).table('amdmotheboards');
          return true;
        }catch(err){
          return {status: false, err: err};
        };
      };
    }else{
      return {status: false, err: 'A placa-mãe não existe'};
    };
  };

  async Delete(id){
    var motheboard = await this.findById(id);

    if(motheboard != undefined){
      try{
        await knex.delete().where({id:id}).table('amdmotheboards');
        return {status: true};
      }catch(err){
        console.log(err);
        return {status: false, err: err};
      };
    }else{
      return {status: false, err: 'A placa-mãe não existe.'};
    };
  };

  async CreateRelationShipAmd(amdmotheboard_id, cpu_id, cpu_name, memoryram_name, memoryram_id){
    try{
      await knex.insert({amdmotheboard_id, cpu_id, cpu_name, memoryram_name, memoryram_id}).table('amdcpus_motheboards_memoryram');

    }catch(err){
      console.log(err);
    };
  };

  async isCompatibleCpuAMD(id){
    try{
     var motheboardscompatibles = await knex.select().table('amdcpus_motheboards_memoryram').where({amdcpu_id: id}).innerJoin('amdmotheboards', 'amdmotheboards.id', 'amdcpus_motheboards_memoryram.amdmotheboard_id');

     var motheboardscompatiblesFilter = new Map();

     motheboardscompatibles.forEach(namemotheboard => {
      if(!motheboardscompatiblesFilter.has(namemotheboard.cpu_name)){
        motheboardscompatiblesFilter.set(namemotheboard.motheboard, namemotheboard)
      };
      });
      return [...motheboardscompatiblesFilter.values()];

      // return cpuscompatibles;
    }catch(err){
      console.log('Erro ao criar relacionamento CPU_AMD_MOTHEBOARD', err);
      return {status: false, err: err};
    };
  };

  async isCompatibleMemoryRamAmd(id){
    try{
      var memoryramcompatibles = await knex.select().table('amdcpus_motheboards_memoryram').where({amdmotheboard_id: id}).innerJoin('amdintelmemoryram', 'amdintelmemoryram.id', 'amdcpus_motheboards_memoryram.memoryram_id');

      var memoryramcompatiblesFilter = new Map();

      memoryramcompatibles.forEach(namememory => {
        if(!memoryramcompatiblesFilter.has(namememory.memoryram_name)){
          memoryramcompatiblesFilter.set(namememory.memoryram_name, namememory)
        };
      });

      return [...memoryramcompatiblesFilter.values()];
    }catch(err){
      console.log('Erro ao criar relacionamento MEMORY-RAM_AMD_MOTHEBOARD', err);
      return {status: false, err: err};
    };
  };

};

module.exports = new MotheboardsModels();