const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = (req,res,next)=>{
    try {
        //    console.log(req.headers);
        const token = req.headers.authorization.split(" ")[1]
        const decode = jwt.verify(token , process.env.JWT_SECRET);
              decode.token = token;
        req.UserData =  decode;
        next()
        }catch{
            return res.status(401).json({Message : "AUTHONTICATION_FAILED"})
        }
}