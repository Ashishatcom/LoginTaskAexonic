const User = require('../models/users');
const APPECTATION = require('../config/constants')
const UserMethod = new User();
require('dotenv').config(); 
const jwt = require('jsonwebtoken');


const searchUser = async (req,res)=>{

    try {
        // const validUser = req.UserData
        let updateDetails = {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            phone:req.body.phone,
            email:req.body.email
        }
        let searchedUser = await User.find(
        {$or:[
         { firstName:{"$regex": `.*${updateDetails.firstName}.*`}},
          {lastName:{"$regex": `.*${updateDetails.lastName}.*`}},
          {phone:{"$regex": `.*${updateDetails.phone}.*`}},
          {email:{"$regex": `.*${updateDetails.email}.*`}}
        ]})
         res.json(searchedUser)
        } catch (error) {
        res.json({RESPONSE: error.message})
    }
         
}

const Pagination = async(req,res)=>{
    try {
        let page = req.params.id;
        // console.log(page);
        let limit = 2;
        const searchUserByPagination = await User.find({},{_id:1, firstName:1,lastName:1,email:1,phone:1 }).skip((page-1)*limit).limit(limit);
        if(!searchUserByPagination) throw new Error (APPECTATION.STATUMESSAGE.YOU_HAVE_REACHED_MAX_LIMIT)
        res.json({Status:200,"Response":searchUserByPagination})
    } catch (error) {
      res.json({RESPONSE: error.message})
    }
    
}
module.exports = {
	searchUser,
    Pagination
}