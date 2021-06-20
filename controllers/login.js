const User = require('../models/users');
const APPECTATION = require('../config/constants')
const UserMethod = new User();
const Response = require('../config/response')
// require('dotenv').config(); 
const jwt = require('jsonwebtoken');

const loginUser = async (req,res)=>{
    try {
         let loginDetails = {email:req.body.email,password:req.body.password}

         let userDetailsInDatabase = await UserMethod.findUserDetails(loginDetails);
         if(!userDetailsInDatabase) throw new Error(APPECTATION.STATUSMESSAGE.NOT_FOUND);

         let comparedPassword =  await UserMethod.isPasswordMatch(loginDetails,userDetailsInDatabase);
         if(!comparedPassword)  throw new Error(APPECTATION.STATUSMESSAGE.PASSWORD_NOT_MATCH);
         // Creating  Token
         let token = jwt.sign({email:userDetailsInDatabase.email,userId:userDetailsInDatabase._id,
            Status : true
        },APPECTATION.ENVIROMENT.JWT_SECRET,{ expiresIn: APPECTATION.ENVIROMENT.JWT_EXPIRE});

        // Refresh Token
        let refreshToken = jwt.sign({email:userDetailsInDatabase.email,userId:userDetailsInDatabase._id,
            Status : true
        },APPECTATION.ENVIROMENT.JWT_SECRET,{ expiresIn: APPECTATION.ENVIROMENT.JWT_EXPIRE_REFRESH});
            userDetailsInDatabase.token = refreshToken
            userDetailsInDatabase.save()
            Response(res,APPECTATION.STATUSCODE.OK,APPECTATION.STATUSCODE.OK,{"token":token,"RefreshToken":refreshToken},APPECTATION.STATUSMESSAGE.USER_LOGEDIN)
        //  res.json({Status:200,"Response":token,"RefreshToken":refreshToken});

        } catch (error) {
            Response(res,APPECTATION.STATUSCODE.OK,APPECTATION.STATUSCODE.NOT_FOUND,null,APPECTATION.STATUSMESSAGE.NOT_FOUND);
        // res.json({RESPONSE: error.message})
    }  
}
module.exports = {
	loginUser,
}