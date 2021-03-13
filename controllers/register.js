const User = require('../models/users');
const APPECTATION = require('../config/constants')
const UserMethod = new User();

const saveUserRegistration = async (req,res)=>{
    try {
        // Checking If USER Exist 
        let existingUser = await User.findOne({email:req.body.email})
        if(existingUser) throw new Error(APPECTATION.STATUMESSAGE.EMAIL_EXIST);
        // Hashing PAssword 
        let hashedPassword = await UserMethod.userHashingPassword(req.body.password);

        let userFormDetails = await new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            phone:req.body.phone,
            password:hashedPassword
        });
        let saveUserRegistration = await userFormDetails.save();
        if(!saveUserRegistration) throw new Error(APPECTATION.STATUMESSAGE.DATA_NOT_SAVE);
        res.json({Status:201,"Response":APPECTATION.STATUMESSAGE.DATA_SAVE})
        
    } catch (error) {
        res.json({RESPONSE: error.message})
    }
  
}
module.exports = {
	saveUserRegistration,
}