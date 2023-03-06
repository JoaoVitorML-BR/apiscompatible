const express = require("express");
const app = express();
const router = express.Router();
// const HomeController = require("../controllers/HomeController");
const AmdMotheboardController = require('../controllers/AmdMotheboardsController');
const AmdCpusController = require('../controllers/AmdCpusController');
const MemoryRamController = require('../controllers/MemoryRamController');
const IntelMotheboardsController = require('../controllers/IntelMotheboardsController');
const IntelCpusController = require('../controllers/IntelCpusController');
const SSDController = require('../controllers/SSDController');
const GPUController = require('../controllers/GPUController');
const FonteController = require("../controllers/FonteController");

const ProcessVideo = require("../StreamProcess/StreamProcess");

router.get('/video-process', ProcessVideo.ProcessingVideo); 

// CRUD AMD_MOTHEBOARDS
router.get('/motheboard/AMD', AmdMotheboardController.index);
router.post('/motheboard/AMD', AmdMotheboardController.create);
router.get('/motheboard/:id', AmdMotheboardController.findMotheboard);
router.put('/motheboard', AmdMotheboardController.edit);
// router.delete('/motheboard/:id', AmdMotheboardController.remove); 

// CRUD MOTHEBOARDS-INTEL
router.get('/motheboardintel/INTEL', IntelMotheboardsController.index);
router.post('/motheboard/INTEL', IntelMotheboardsController.createIntelMotheboard);
router.get('/motheboard/INTEL/:id', IntelMotheboardsController.findMotheboardIntel);
router.put('/motheboard/INTEL', IntelMotheboardsController.edit);
// router.delete('/motheboard/INTEL/:id', IntelMotheboardsController.remove);

// CRUD CPUS-AMD
router.get('/cpu/AMD',  AmdCpusController.index);
router.get('/cpu/AMD/:id',  AmdCpusController.findCpu);
router.post('/cpu/AMD', AmdCpusController.create);
router.put('/cpu/AMD', AmdCpusController.edit);
// router.delete('/cpu/AMD/:id', AmdCpusController.remove);

// CRUD CPUS-INTEL
router.get('/cpu/INTEL',  IntelCpusController.index);
router.get('/cpu/INTEL/:id',  IntelCpusController.findCpu);
router.post('/cpu/INTEL', IntelCpusController.create);
router.put('/cpu/INTEL', IntelCpusController.edit);
// router.delete('/cpu/INTEL/:id', IntelCpusController.remove);

// CRUD MEMORY-RAM-ALL
router.get('/memoryram', MemoryRamController.index);
router.get('/memoryram/:id', MemoryRamController.findMemoryRam);
router.post('/memoryram', MemoryRamController.create);
router.put('/memoryram', MemoryRamController.edit);
// router.delete('/memoryram/:id', MemoryRamController.remove);

// CRUD SSD-ALL
router.get('/ssd', SSDController.index);
router.get('/ssd/:id', SSDController.findSSD);
router.post('/ssd', SSDController.create);
router.put('/ssd', SSDController.edit);
// router.delete('/ssd/:id', SSDController.remove);

// CRUD GPU-ALL
router.get('/gpu', GPUController.index);
router.get('/gpu/:id', GPUController.findGPU);
router.post('/gpu', GPUController.create);
router.put('/gpu', GPUController.edit);
// router.delete('/gpu/:id', GPUController.remove);

// CRUD FONTE-ALL
router.get('/fonte', FonteController.index);
router.get('/fonte/:id', FonteController.findFonte);
router.post('/fonte', FonteController.create);
router.put('/fonte', FonteController.edit);
// router.delete('/fonte/:id', FonteController.remove);

// SEARCHING CPUS COMPATIBLES WITH MOTHEBOARD_ID / NAME
router.get('/cpuscompatibles/AMD/:id', AmdMotheboardController.compatiblescpu);
router.get('/memoryramcompatibles/AMD/:id', AmdMotheboardController.compatiblesmemoryram);
router.get('/ssdcompatibles/AMD/:id', SSDController.compatiblesSSD);
router.get('/fontecompatibles/AMD/:id', FonteController.compatiblesFonte);
router.get('/gpucompatibles/AMD/:id_cpu', GPUController.compatiblesGPUAmd);

router.get('/cpuscompatibles/INTEL/:id', IntelMotheboardsController.compatiblescpu);
router.get('/memoryramcompatibles/INTEL/:id', IntelMotheboardsController.compatiblesmemoryram);
router.get('/ssdcompatibles/INTEL/:id', SSDController.compatiblesSSDIntel);
router.get('/gpucompatibles/INTEL/:id_cpu', GPUController.compatiblesGPUIntel);

// creating realation motheboards
router.post('/relationmotheboard/INTEL', IntelMotheboardsController.createIntelMotheboardRelation);
router.post('/relationmotheboard/INTEL/SSD', SSDController.createIntelMotheboardSSDRelation);
router.post('/relationmotheboard/INTEL/GPU', GPUController.createIntelMotheboardGPURelation);

router.post('/relationmotheboard/AMD/', AmdMotheboardController.createAmdMotheboardRelation);
router.post('/relationmotheboard/AMD/SSD/', SSDController.createAmdMotheboardSSDRelation);
router.post('/relationmotheboard/AMD/GPU', GPUController.createAmdMotheboardGPURelation);
router.post('/relationmotheboard/AMD/FONTE', FonteController.createAmdMotheboardFonteRelation);

module.exports = router;