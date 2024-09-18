const bcrypt = require('bcrypt'); //algo pour hasher un mdp
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
bcrypt.hash(req.body.password, 10) //10 tours
.then((hash) => {
    const user = new User({
        email: req.body.email,
        password: hash
    });
    user.save()
    .then(() => res.status(201).json({ message: 'user create with success'}))
    .catch((error) => res.status(400).json( { error }));
})
.catch((error) => res.status(500).json( { error }));
}

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
    .then((user) => {
        if (user === null)
            res.status(401).json( { message: 'paire identifiant/mot de passe incorrect' } );
        else
        {
            bcrypt.compare(req.body.password, user.password)
            .then((valid) => {
                if (valid === false)
                    res.status(401).json( { message: 'paire identifiant/mot de passe incorrect' } );
                else
                {
                    res.status(200).json( {
                        userId: user._id,
                        token: jwt.sign( //tres important -->
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h'}
                        )
                    });
                }
            })
            .catch((error) => {
                res.status(500).json( { error } );
            });
        }
    })
    .catch((error) => {
        res.status(500).json( { error } );
    });
}


/*
Les JSON web tokens sont des tokens chiffrés qui peuvent être utilisés pour l'autorisation.
La méthode sign() du package jsonwebtoken utilise une clé secrète pour chiffrer un token qui
 peut contenir un payload personnalisé et avoir une validité limitée.
*/