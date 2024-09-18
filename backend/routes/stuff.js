const express = require('express');
const stuffController = require('../controllers/stuff');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const router = express.Router();

router.post('/', auth, multer, stuffController.createThing);
router.put('/:id', auth, multer, stuffController.updateOneThing);
router.get('/:id', auth, stuffController.getOneThing);
router.delete('/:id', auth, stuffController.deleteOneThing);
router.get('/', auth, stuffController.getAllThing);

module.exports = router;


/*
si jamais l'utilisateur n'est pas authentifier il poura  effectuer aucune requete grace au middleware (auth)
*/