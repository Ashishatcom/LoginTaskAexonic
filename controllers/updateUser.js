const User = require('../models/users');
const APPECTATION = require('../config/constants')
const UserMethod = new User();
require('dotenv').config(); 


const updateUser = async (req,res)=>{

    try {
        const validUser = req.UserData
        let updateDetails = {
            firstName:req.body.firstName,
            lastNAme:req.body.lastName,
            phone:req.body.phone,
        }
        //   console.log(req.UserData);
         let userDetailsInDatabase = await UserMethod.findSpeficUserDetails(validUser);
         if(!userDetailsInDatabase) throw new Error(APPECTATION.STATUSMESSAGE.NOT_FOUND)
         userDetailsInDatabase.firstName = updateDetails.firstName;
         userDetailsInDatabase.lastName  = updateDetails.lastNAme;
         userDetailsInDatabase.phone     = updateDetails.phone
         let saveUpdateDetails = await userDetailsInDatabase.save();
         if(!saveUpdateDetails) throw new Error(APPECTATION.STATUSMESSAGE.SOMETHING_WRONG_HAPPEN_PLEASE_TRY_ONCE_AGAIN)   
         res.json({Status:200,"RESPONSE":APPECTATION.STATUSMESSAGE.DATA_UPDATED})
        } catch (error) {
        res.json({RESPONSE: error.message})
    }
         
}
module.exports = {
	updateUser,
}