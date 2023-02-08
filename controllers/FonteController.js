const FonteModels = require('../models/FonteModels')

class FonteController {
  async index(req, res) {
    const fonte = await FonteModels.findAll()
    res.json(fonte)
  }

  async findFonte(req, res) {
    const id = req.params.id
    const fonte = await FonteModels.findById(id)
    if (fonte == undefined) {
      res.status(404)
      res.json({})
    } else {
      res.status(200)
      res.json(fonte)
    }
  }

  async findFonteyName(req, res) {
    const nameFonte = req.params.name
    const searchFonteName = await FonteModels.findByName(nameFonte)

    if (searchFonteName == undefined) {
      res.status(404)
      res.json({})
    } else {
      res.status(200)
      res.json(searchFonteName)
    }
  }

  async create(req, res) {
    const { namefonte,powerfonte } = req.body

    console.log(namefonte,powerfonte)

    if (
      namefonte == undefined ||
      powerfonte == undefined
    ) {
      res.status(400)
      res.json({ err: 'Campos preenchidos invalido.' })
      return
    }

    if (namefonte[0] == '' || powerfonte[0] == '') {
      res.status(400)
      res.json('Você precisa preencher todos os campos corretamente.')
      return
    }

    const FonteExists = await FonteModels.findByName(namefonte)

    if (FonteExists) {
      console.log(FonteExists)
      res.status(406)
      res.json({ err: 'Fonte já está cadastrado.' })
      return
    }

    await FonteModels.createFonte(namefonte, powerfonte)
    res.status(200)
    res.send('Fonte cadastrada com sucesso!')
  }

  async edit(req, res) {
    const { id, namefonte, powerfonte } = req.body
    console.log(
      id,
      namefonte,
      powerfonte,
      '||| Console Edit MemoryRam'
    )
    const result = await FonteModels.UpdateFonte(
      id,
      namefonte,
      powerfonte
    )
    console.log(result, '||| Console do result edit Fonte')
    if (result != undefined) {
      if (result.status) {
        res.status(200)
        res.send('Fonte atualizado com sucesso!')
      } else {
        res.status(404)
        res.send(result.err)
      }
    } else {
      res.status(406)
      res.send('Pane no sistema, ocorreu algum erro no servidor!')
    }
  }

  async remove(req, res) {
    const id = req.params.id
    const result = await FonteModels.Delete(id)

    if (result.status) {
      res.status(200)
      res.send('Fonte deletado com sucesso.')
    } else {
      res.status(406)
      res.send(result)
    }
  }

  async createAmdMotheboardFonteRelation(req, res) {
    const { amdgpu_id, amdfonte_id, fonte_name, fonte_power } = req.body

    console.log(amdgpu_id, amdfonte_id, fonte_name, fonte_power)

    await FonteModels.CreateRelationShipAmdFonte(
      amdgpu_id,
      amdfonte_id,
      fonte_name,
      fonte_power
    )

    res.status(200)
    res.send('Relacionamento-AMD-Fonte criado com sucesso!')
  };

  async compatiblesFonte(req, res){
    const id_motheboard = req.params.id;
    const compatiblesFonte = await FonteModels.iscompatibleFonteAMD(id_motheboard);
    res.json(compatiblesFonte);
    console.log(compatiblesFonte);
  };
}

module.exports = new FonteController();