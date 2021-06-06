const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req,res,next){      //next for going to next middleware

    //Get toke from header
    const token = req.header('x-auth-token');

    //Check if not token
    if(!token){
        return res.status(401).json({msg:'No token, auth failed'});
    }

    try {
        const decoded = jwt.verify(token,config.get('jwtSecret'));  //verify token & pullout payload

        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({msg: 'Token is invalid'});
    }

}