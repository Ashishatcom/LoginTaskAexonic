const User = require('../models/users');
const APPECTATION = require('../config/constants')
const UserMethod = new User();
require('dotenv').config(); 
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
        },process.env.JWT_SECRET,{ expiresIn: process.env.JWT_EXPIRE});
            userDetailsInDatabase.token = token
            userDetailsInDatabase.save()
         res.json({Status:200,"Response":token})
        } catch (error) {
        res.json({RESPONSE: error.message})
    }  
}
module.exports = {
	loginUser,
}