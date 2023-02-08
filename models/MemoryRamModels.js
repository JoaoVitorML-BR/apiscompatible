var knex = require('../database/connection');

class MemoryRamModels{
  async findAll(){
    try{
      var result = await knex.select(['id', 'namememoryram', 'sizememoryram', 'frequencymemoryram', 'ddrversion']).table('amdintelmemoryram');
        return result
    }catch(err){
      console.log(err);
      return [];
    };
  };

  async findById(id){
    try{
      var result = await knex.select(['id', 'namememoryram', 'sizememoryram', 'frequencymemoryram', 'ddrversion']).where({id:id}).table('amdintelmemoryram');

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

  async findByName(memoryram){
    try{
      var result = await knex.select(['id', 'namememoryram', 'sizememoryram', 'frequencymemoryram', 'ddrversion']).where({namememoryram: memoryram}).table('amdintelmemoryram');

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

  async createMemoryRam(namememoryram, sizememoryram, frequencymemoryram, ddrversion){

    try{
      await knex.insert({namememoryram, sizememoryram, frequencymemoryram, ddrversion}).table('amdintelmemoryram');
    }catch(err){
      console.log(err);
    };
  };

  async findName(namememoryram){
    try{
      var result = await knex.select('*').from('amdintelmemoryram').where({namememoryram: namememoryram});
      
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

  async UpdateMemoryRam(id, namememoryram, sizememoryram, frequencymemoryram, ddrversion){
    var oldMemoryRam = await this.findById(id);

    if(oldMemoryRam != undefined){
      var editMemoryRam = {};

      if(namememoryram == undefined || namememoryram == '' || namememoryram[0] == ' ' || sizememoryram == undefined || sizememoryram == '' || sizememoryram[0] == ' ' || frequencymemoryram == undefined || frequencymemoryram == '' || frequencymemoryram[0] == ' ' || ddrversion == undefined || ddrversion == '' || ddrversion[0] == ' '){

        return {status: false, err: 'Nome de CPU, geração ou versão invalido.'};

      }else{
        editMemoryRam.namememoryram = namememoryram;
        editMemoryRam.sizememoryram = sizememoryram;
        editMemoryRam.frequencymemoryram = frequencymemoryram;

        console.log(editMemoryRam, 'Memoria ram atualizada com sucesso.');

        try{
          await knex.update(editMemoryRam).where({id:id}).table('amdintelmemoryram');
          return true;
        }catch(err){
          return {status: false, err: err};
        };
      };
    }else{
      return {status: false, err: 'Memoria ram não existe.'};
    };
  };

  async Delete(id){
    var MemoryRamDelete = await this.findById(id);

    if(MemoryRamDelete != undefined){
      try{
        await knex.delete().where({id:id}).table('amdintelmemoryram');
        return {status: true};
      }catch(err){
        console.log(err);
      }
    }else{
      return {status: false, err: 'Memoria Ram não existe.'}
    }
  };

};

module.exports = new MemoryRamModels();