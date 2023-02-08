// marca
// nome
// voltagem

const knex = require('../database/connection')

class FonteModels{
  async findAll(){
  try{
    const result = await knex.select(['id', 'namefonte', 'power']).table('amdintelfonte');
    return result
    }catch(err){
      console.log(err);
      return [];
    };
  };

  async findById(id){
    try{
      const result = await knex.select(['id', 'namefonte', 'power']).where({id:id}).table('amdintelfonte');
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

  async findByName(namefonte){
    try{
      const result = await knex.select(['id', 'namefonte', 'power']).where({namefonte: namefonte}).table('amdintelfonte');

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

  async createFonte(namefonte, power){
    try{
      await knex.insert({namefonte, power}).table('amdintelfonte');
    }catch(err){
      console.log(err);
    };
  };

  async findName(namefonte){
    try{
      const result = await knex.select('*').from('amdintelfonte').where({namefonte: namefonte});
      
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

  async UpdateFonte(id, namefonte, power){
    const oldFonte = await this.findById(id);

    if(oldFonte != undefined){
      const editFonte = {};

      if(namefonte == undefined || namefonte == '' || namefonte[0] == ' ' || power == undefined || power == '' || power[0] == ' '){

        return {status: false, err: 'Nome de fonte ou voltagem invalido.'};

      }else{
        editFonte.namefonte = namefonte;
        editFonte.power = power;

        console.log(editFonte, 'Fonte atualizado com sucesso.');

        try{
          await knex.update(editFonte).where({id:id}).table('amdintelfonte');
          return true;
        }catch(err){
          return {status: false, err: err};
        };
      };
    }else{
      return {status: false, err: 'Fonte não existe.'};
    };
  };

  async Delete(id){
    const FonteDelete = await this.findById(id);

    if(FonteDelete != undefined){
      try{
        await knex.delete().where({id:id}).table('amdintelfonte');
        return {status: true};
      }catch(err){
        console.log(err);
      }
    }else{
      return {status: false, err: 'Fonte não existe.'}
    }
  };

  async CreateRelationShipAmdFonte(amdgpu_id, amdfonte_id, fonte_name, fonte_power){
    try{
      await knex.insert({amdgpu_id, amdfonte_id, fonte_name, fonte_power}).table('amdfonte_gpu')
    }catch(err){
      console.log(err);
    };
  };

  async iscompatibleFonteAMD(id){
    try{
      const fontecompatibles = await knex.select().table('amdfonte_gpu').where({amdgpu_id: id}).innerJoin('amdintelfonte', 'amdintelfonte.id', 'amdfonte_gpu.amdgpu_id');

      const fontecompatiblesFilter = new Map();

      fontecompatibles.forEach(namefonte => {
        if(!fontecompatiblesFilter.has(namefonte.fonte_name)){
          fontecompatiblesFilter.set(namefonte.fonte_name, namefonte);
        };
      });

      return [...fontecompatiblesFilter.values()];
    }catch(err){
      console.log('Erro ao criar relacionamento Fonte_AMD_MOTHEBOARD');
      return {status: false, err: err};
    };
  };

};

module.exports = new FonteModels();