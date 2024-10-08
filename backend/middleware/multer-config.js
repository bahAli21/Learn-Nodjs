const multer = require('multer');

const MIME_TYPES_DICT = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'images');
    },
    filename: (req, file, callback) => {
      const name = file.originalname.split(' ').join('_');
      const extension = MIME_TYPES_DICT[file.mimetype];
      callback(null, name + Date.now() + '.' + extension);
    }
  });
  
  module.exports = multer({ storage: storage }).single('image');

  /*
  multer est un package de gestion de fichiers.
  Sa méthode diskStorage()  configure le chemin et le nom de fichier pour les fichiers entrants.
  Sa méthode single()  crée un middleware qui capture les fichiers d'un certain type (passé en argument),
  et les enregistre au système de fichiers du serveur à l'aide du storage configuré.
  */