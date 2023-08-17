const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createInventoryController, getInventoryController, getDonorsController, getHospitalController, getOrgnaisationController, getOrgnaisationForHospitalController, getInventoryHospitalController, getRecentInventoryController } = require('../controllers/inventoryController');

const router = express.Router();

// create blood inventory
router.post('/create-inventory', authMiddleware, createInventoryController)

// get all the blood records
router.get('/get-inventory', authMiddleware, getInventoryController)

//GET RECENT BLOOD RECORDS
router.get(
    "/get-recent-inventory",
    authMiddleware,
    getRecentInventoryController
);

//GET HOSPITAL BLOOD RECORDS
router.post(
    "/get-inventory-hospital",
    authMiddleware,
    getInventoryHospitalController
);

//GET DONOR RECORDS
router.get("/get-donors", authMiddleware, getDonorsController);

//GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddleware, getHospitalController);

//GET orgnaisation RECORDS
router.get("/get-orgnaisation", authMiddleware, getOrgnaisationController);

//GET orgnaisation RECORDS
router.get(
    "/get-orgnaisation-for-hospital",
    authMiddleware,
    getOrgnaisationForHospitalController
);



module.exports = router;