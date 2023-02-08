var knex = require('../database/connection');

class IntelMotheboardsModels{
  async findAllmotheboard(){
    try{
      var result = await knex.select(['id', 'motheboard', 'motheboardversionintel']).table('intelmotheboards');
      // console.log(" Aqui é o resul >>>>>> ",result);
      return result;
    }catch(err){
      console.log(err);
      return []; 
    };
  };

  async findById(id){
    try{
      var result = await knex.select(['id', 'motheboard', 'motheboardversionintel']).where({id:id}).table('intelmotheboards');

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
      var result = await knex.select(['id' ,'motheboard', 'motheboardversionintel']).where({motheboard: motheboard}).table('intelmotheboards');

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

  async createMotheboard(motheboard, motheboardversionintel){

    try{
      await knex.insert({motheboard, motheboardversionintel}).table('intelmotheboards');
    }catch(err){
      console.log(err);
    };
  };

  async findName(motheboard){
    try{
      var result = await knex.select('*').from('intelmotheboards').where({motheboard: motheboard});
      
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
        editMotheboard.motheboardversionintel = motheboardversion;

        console.log(editMotheboard, ' PLaca mãe e versão atualizada com sucesso!' + ' ||| Console update placa mãe - AmdMotheboardsModels');

        try{
          await knex.update(editMotheboard).where({id:id}).table('intelmotheboards');
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
        await knex.delete().where({id:id}).table('intelmotheboards');
        return {status: true};
      }catch(err){
        console.log(err);
        return {status: false, err: err};
      };
    }else{
      return {status: false, err: 'A placa-mãe não existe.'};
    };
  };


  // IsCompatible Motheboard, cpu, memoryram Intel

  async CreateRelationShipIntel(intelmotheboard_id, cpu_id, cpu_name, memoryram_name, memoryram_id){
    try{
      await knex.insert({intelmotheboard_id, cpu_id, cpu_name, memoryram_name, memoryram_id}).table('intelcpus_motheboard_memoryram');

    }catch(err){
      console.log(err);
    };
  };

  async isCompatibleCpuIntel(id){
    try{
     var cpuscompatibles = await knex.select().table('intelcpus_motheboard_memoryram').where({intelmotheboard_id: id}).innerJoin('intelmotheboards', 'intelmotheboards.id', 'intelcpus_motheboard_memoryram.intelmotheboard_id');

     var cpuscompatiblesFilter = new Map();

     cpuscompatibles.forEach(namecpu => {
      if(!cpuscompatiblesFilter.has(namecpu.cpu_name)){
        cpuscompatiblesFilter.set(namecpu.cpu_name, namecpu)
      };
      });

      return [...cpuscompatiblesFilter.values()];
    }catch(err){
      console.log('Deu merda...', err);
      return {status: false, err: err};
    };
  };

  async isCompatibleMemoryRamIntel(id){
    try{
      var memoryramcompatibles = await knex.select().table('intelcpus_motheboard_memoryram').where({intelmotheboard_id: id}).innerJoin('amdintelmemoryram', 'amdintelmemoryram.id', 'intelcpus_motheboard_memoryram.memoryram_id');

      var memoryramcompatiblesFilter = new Map();

      memoryramcompatibles.forEach(namememory => {
        if(!memoryramcompatiblesFilter.has(namememory.memoryram_name)){
          memoryramcompatiblesFilter.set(namememory.memoryram_name, namememory)
        };
      });

      console.log(memoryramcompatiblesFilter);

      return [...memoryramcompatiblesFilter.values()];
    }catch(err){
      console.log('Deu merda...', err);
      return {status: false, err: err};
    };
  };

};

module.exports = new IntelMotheboardsModels();