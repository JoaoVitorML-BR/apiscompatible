var knex = require('../database/connection')
const fs = require('fs');

class SSDModels{
  async findAll(){
  try{
    var result = await knex.select(['id', 'namessd', 'sizessd']).table('amdintelssd');
    return result
    }catch(err){
      console.log(err);
      return [];
    };
  };

  async findById(id){
    try{
      var result = await knex.select(['id', 'namessd', 'sizessd']).where({id:id}).table('amdintelssd');
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

  async findByName(namessd){
    try{
      var result = await knex.select(['id', 'namessd', 'sizessd']).where({namessd: namessd}).table('amdintelssd');

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

  async createSSD(namessd, sizessd){
    try{
      await knex.insert({namessd, sizessd}).table('amdintelssd');
    }catch(err){
      console.log(err);
    };
  };

  async findName(namessd){
    try{
      var result = await knex.select('*').from('amdintelssd').where({namessd: namessd});
      
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

  async UpdateSSD(id, namessd, sizessd){
    var oldSSD = await this.findById(id);

    if(oldSSD != undefined){
      var editSSD = {};

      if(namessd == undefined || namessd == '' || namessd[0] == ' ' || sizessd == undefined || sizessd == '' || sizessd[0] == ' ' || [0]){

        return {status: false, err: 'Nome de SSD, armazenamento ou voltagem invalido.'};

      }else{
        editSSD.namessd = namessd;
        editSSD.sizessd = sizessd;

        console.log(editSSD, 'SSD atualizado com sucesso.');

        try{
          await knex.update(editSSD).where({id:id}).table('amdintelssd');
          return true;
        }catch(err){
          return {status: false, err: err};
        };
      };
    }else{
      return {status: false, err: 'SSD não existe.'};
    };
  };

  async Delete(id){
    var SSDDelete = await this.findById(id);

    if(SSDDelete != undefined){
      try{
        await knex.delete().where({id:id}).table('amdintelssd');
        return {status: true};
      }catch(err){
        console.log(err);
      }
    }else{
      return {status: false, err: 'SSD não existe.'}
    }
  };

  async CreateRelationShipAmdSSD(amdmotheboard_id, amdssd_id, ssd_name){
    try{
      await knex.insert({amdmotheboard_id, amdssd_id, ssd_name}).table('amdssd_motheboard')
    }catch(err){
      console.log(err);
    };
  };

  // to see which SSD are compatible with the motherboard type its id and it will return a json
  async iscompatibleSSDAMD(id){
    try{
      var ssdcompatibles = await knex.select().table('amdssd_motheboard').where({amdmotheboard_id: id}).innerJoin('amdmotheboards', 'amdmotheboards.id', 'amdssd_motheboard.amdmotheboard_id');

      var ssdcompatiblesFilter = new Map();

      ssdcompatibles.forEach(namessd => {
        if(!ssdcompatiblesFilter.has(namessd.ssd_name)){
          ssdcompatiblesFilter.set(namessd.ssd_name, namessd);
        };
      });

      return [...ssdcompatiblesFilter.values()];
    }catch(err){
      console.log('Erro ao criar relacionamento SSD_AMD_MOTHEBOARD');
      return {status: false, err: err};
    };
  };

  // INTEL RELATIONSHIP

  async CreateRelationShipIntelSSD(intelmotheboard_id, intelssd_id, ssd_name){
    try{
      await knex.insert({intelmotheboard_id, intelssd_id, ssd_name}).table('intelssd_motheboard')
    }catch(err){
      console.log(err);
    };
  };

  // to see which SSD are compatible with the motherboard type its id and it will return a json
  async iscompatibleSSDIntel(id){
    try{
      var ssdcompatibles = await knex.select().table('intelssd_motheboard').where({intelmotheboard_id: id}).innerJoin('intelmotheboards', 'intelmotheboards.id', 'intelssd_motheboard.intelmotheboard_id');

      var ssdcompatiblesFilter = new Map();

      ssdcompatibles.forEach(namessd => {
        if(!ssdcompatiblesFilter.has(namessd.ssd_name)){
          ssdcompatiblesFilter.set(namessd.ssd_name, namessd);
        };
      });

      return [...ssdcompatiblesFilter.values()];
    }catch(err){
      console.log('Erro ao criar relacionamento SSD_INTEL_MOTHEBOARD');
      return {status: false, err: err};
    };
  };


};

module.exports = new SSDModels();