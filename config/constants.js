require('dotenv').config(); 

let DB 		= null;
let ENV 	= null;
let PORT 	= null;

ENV = process.env.NODE_ENV;

if( ENV === 'development' ) {
	
	DB 		= process.env.DEV_MONGODB_URI;
	PORT 	= process.env.DEVPORT;

} else if( ENV === 'production' ) {
	
	DB 		= process.env.PROD_MONGODB_URI;
	PORT 	= process.env.PRODPORT;

} 
const ENVIROMENT={
    JWT_SECRET : process.env.JWT_SECRET,
	JWT_EXPIRE : process.env.JWT_EXPIRE,
	JWT_EXPIRE_REFRESH : process.env.JWT_EXPIRE_REFRESH,
}
const STATUSMESSAGE = {
	EMAIL_EXIST:"EMAIL_ALREDY_EXIST",
	NOT_FOUND:"USER_NOT_FOUND",
	PASSWORD_NOT_MATCH:"PASSWORD_NOT_MATCH",
	DATA_NOT_SAVE : "DATA_NOT_SAVE",
	DATA_UPDATED: "DATA_UPDATED",
	SOMETHING_WRONG_HAPPEN_PLEASE_TRY_ONCE_AGAIN:"SOMETHING_WRONG_HAPPEN_PLEASE_TRY_ONCE_AGAIN",
    YOU_HAVE_REACHED_MAX_LIMIT:"YOU_HAVE_REACHED_MAX_LIMIT",
	DATA_SAVE : "DATA_SAVE",
	USER_LOGEDIN:"USER_LOGEDIN"
}
const STATUSCODE = {
	OK:200,
	DATA_SAVE: 201,
	NOT_FOUND : 404,
	EMPTY_RESPONSE: 204,
	BAD_REQUEST:400,
	UNAUTHORIZED:401,
	INTERNAL_SERVER_ERROR: 500,
	PAYMENT_REQUIRED: 402,

}

module.exports = {
	MONGO_URI : DB,
	PORT,
	STATUSMESSAGE,
	ENVIROMENT,
	STATUSCODE
}